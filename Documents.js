var express = require('express');
 require('./connection'); 
 require('./funciones.js');
var mysql = require('mysql')
var connectionpool = getConn(); 
var router = express.Router();
var moment = require('moment');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = 'this is the secret secret secret 12356';



/**
 * Retorna una lista de documentos 
 *
 **************************************************/
router.get('/facturing/Documents', function(req, res) {
	
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT  * FROM Documents WHERE CompaniesId =?"; 
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
	
	excQuery(query,function(err,response){
		if (err) {
			res.json(err); 
		} else {
			res.json(response);
		}
	});
});


/**
 * Retorna un Documento dado su Id
 *
 **************************************************/
router.get('/facturing/Documents/:Id', function(req, res) {
	
	var query = "SELECT * FROM `Documents`WHERE Id=? "; 
	var inserts = [req.params.Id];
		query = mysql.format(query, inserts);
	excQuery(query,function(err,response){
		if (err) {
			res.json(err); 
		} else {
			res.json(response);
		}
	});
});


/**
 * Elimina un Documento dado su Id
 *
 **************************************************/
router.delete('/facturing/Documents/:Id', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "DELETE FROM `Documents` WHERE Id=?";  
	var inserts = [req.params.Id];
		query = mysql.format(query, inserts);
	excQuery(query,function(err,response){
		if (err) {
            log("Err..."+err)
			res.json(err); 
		} else {
            jsonlog("res..."+response)
			res.json(response);
		}
	});
});




/***********************AGREGAR Documento LISTO**************************
 * Para agregar un Documento cremamos una variable datos con los datos del
 * Documento agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Documents', function(req, res) {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);

	var document = {
		"CompaniesId":  decoded.CompanyId,
		"CurrencyId": req.body.CurrencyId,
		"CustomerId": req.body.CustomerId,
		"StatusId": req.body.StatusId,
		"TypeId": req.body.TypeId,
		"Enabled": req.body.Enabled,
		"DocumentsId": req.body.DocumentsId,
		"Number": req.body.Number,
		"Date": req.body.Date,
		"ExpirationDate": req.body.ExpirationDate,
		"Footer": req.body.Footer,
		"Amount": req.body.Amount,
		"PurchaseOrder": req.body.PurchaseOrder,
		"ExchangeRate": req.body.ExchangeRate,
		"Memo": req.body.Memo,
		"Subheading": req.body.Subheading,
		"NumberPrefix": req.body.NumberPrefix,
		"Status": req.body.Status,
		"CreatedBy": decoded.Username,
		"LastUpdatedBy": decoded.Username
	}; 
	var details =req.body.Details;
	log(document);
	log("details req: "+details); 
	//Si es una factura y no llega el number o es igual a null, buscamos el ultimo en la db.

	var getNCF = function (callback) {
		//Buscamos el ultimo numero de factura fiscal, si no existe colocamos 1.
		var ncfQuery = "SELECT MAX(Number) NCF from ?? Where CompaniesId =? and Enabled =1; ";
		var inserts = ['Documents', decoded.CompanyId];
		ncfQuery = mysql.format(ncfQuery, inserts);
		log('select ncf: ' + ncfQuery);
		excQuery(ncfQuery, function (errNCF, responseNCF) {
			if (errNCF) {
				res.json(errNCF);
			} else {
				jsonlog('res', responseNCF)
				if (responseNCF.data[0].NCF != undefined) {
					
					document.Number = responseNCF.data[0].NCF + 1;

				} else {
					log("Respuesta 0:1 ")
					document.Number = 1;
				}
			}
			callback();
		});
	}

	var CreateDocument = function (callback) {

		var insertDocument = "INSERT INTO ?? SET ?";
		var inserts = ['Documents', document];
		insertDocument = mysql.format(insertDocument, inserts);
		log(insertDocument);

		excQuery(insertDocument, function (err, response) {
			if (err) {
				res.json(err);
			} else {
				document.Id = response.data.insertId;
				log("Respuesta Crear doc"+response);
				callback();
			}
		});
	}
	
	var CreateDetails = function () {
		var detailsToInsert = [];
		for (var i = 0; i < details.length; i++) {
			detailsToInsert[i] = [details[0].TaxesId,
			document.Id,
			details[0].ProductsId,
				1,
			details[0].Description,
			details[0].Quantity,
			details[0].Price,
			details[0].DiscountValue,
			details[0].DiscountType,
			details[0].Amount,
			details[0].CreatedBy,
			details[0].UpdatedBy]
		}
		jsonlog("details to insert", detailsToInsert);

		var queryDetails = "INSERT INTO ??" +
			"(TaxesId,DocumentsId,ProductsId,Enabled,Description,Quantity,Price,DiscountValue,DiscountType,Amount,CreatedBy,UpdatedBy)" +
			"VALUES ?";
		var inserts = ['DocumentsDetails', detailsToInsert];
		queryDetails = mysql.format(queryDetails, inserts);
		log(queryDetails);

		excQuery(queryDetails, function (err, response) {
			if (err) {
				res.json(err);
			} else {
				res.json(response);
			}
		});
	}

	if (document.TypeId === 2 && (document.Number === undefined || document.Number === null)) {
		getNCF(function () {
			log("1")
			CreateDocument(function () {
				CreateDetails();
			});
		});
	} else {
		CreateDocument(function () {
				CreateDetails();
			});

	}




	// var insertQuery = "INSERT INTO ?? SET ?"; 
	// var inserts = ['Documents', document]; 
	// insertQuery = mysql.format(insertQuery, inserts);
	// log(insertQuery); 
	// excQuery(insertQuery,function(errInsert,responseInsert){
	// 	if (errInsert) {
	// 		res.json(errInsert); 
	// 	} else {
	// 		res.json(responseInsert);
	// 	}
	// });
});

/***********************EDITAR Documento LISTO**************************
 * Para EDITAR un Documento cremamos una variable datos con los datos del
 * Documento EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Documents', function(req, res) {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);

	var email = req.body.email;
		var data = 
		{
			"CompaniesId": decoded.CompanyId,
			"Name": req.body.Name,
			"CurrencyId": req.body.CurrencyId,
			"IdentificationNumber": req.body.IdentificationNumber,
			"IdentificationType": req.body.IdentificationType,
			"ContactFirstName": req.body.ContactFirstName,
			"ContactLastName": req.body.ContactLastName,
			 "Enabled": req.body.Enabled,
			"Email": req.body.Email,
			"Phone": req.body.Phone,
			"Mobile": req.body.Mobile,
			"Fax": req.body.Fax,
			"AddressLine1": req.body.AddressLine1,
			"AddressLine2": req.body.AddressLine2,
			"City": req.body.City,
			"State": req.body.State,
			"CountryId": req.body.CountryId,
			"UpdatedBy": decoded.Username
		}; 
	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=? "; 
	var inserts = ['Documents', data, req.body.Id]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	
	excQuery(insertQuery,function(err,response){
		if (err) {
			res.json(err); 
		} else {
			res.json(response);
		}
	});
});

module.exports = router;