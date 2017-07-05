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
 * Retorna una lista de todos los estados de documentos 
 *
 **************************************************/
router.get('/facturing/Customers', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	var query = "SELECT * FROM Customers WHERE CompaniesId =? "; 
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
	
	queryString(query, req.query, function (q, pag) {
		log(q);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_Customers.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un Cliente dado su Id
 *
 **************************************************/
router.get('/facturing/Customers/:Id', function(req, res) {
	
	var query = "SELECT * FROM `Customers`WHERE Id=? "; 
	var inserts = [req.params.Id];
		query = mysql.format(query, inserts);
	excQuery(query,function(err,response){
		if (err) {
			res.status(400).json(err); 
		} else {
			res.json(response);
		}
	});
});


/**
 * Elimina un Cliente dado su Id
 *
 **************************************************/
router.delete('/facturing/Customers/:Id', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "DELETE FROM `Customers` WHERE Id=?";  
	var inserts = [req.params.Id];
		query = mysql.format(query, inserts);
	excQuery(query,function(err,response){
		if (err) {
            log("Err..."+err)
			res.status(400).json(err); 
		} else {
            jsonlog("res..."+response)
			res.json(response);
		}
	});
});




/***********************AGREGAR Cliente LISTO**************************
 * Para agregar un Cliente cremamos una variable datos con los datos del
 * Cliente agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Customers', function(req, res) {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
jsonlog ("Decode: ", decoded); 
	var data = 
		{
			"CompaniesId": decoded.CompanyId,
			"Name": req.body.Name,
			"CurrencyId": req.body.CurrencyId,
			"IdentificationNumber": req.body.IdentificationNumber,
			"IdentificationType": req.body.IdentificationType,
			"ContactFirstName": req.body.ContactFirstName,
			"ContactLastName": req.body.ContactLastName,
			"Email": req.body.Email,
			"Phone": req.body.Phone,
			"Mobile": req.body.Mobile,
			"Fax": req.body.Fax,
			"AddressLine1": req.body.AddressLine1,
			"AddressLine2": req.body.AddressLine2,
			"City": req.body.City,
			"State": req.body.State,
			"CountryId": req.body.CountryId,
			"CreatedBy": decoded.Username,
			"UpdatedBy": decoded.Username
		}; 
	console.log(data);

	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Customers', data]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	excQuery(insertQuery,function(errInsert,responseInsert){
		if (errInsert) {
			res.json(errInsert); 
		} else {
			res.json(responseInsert);
		}
	});
});

/***********************EDITAR Cliente LISTO**************************
 * Para EDITAR un Cliente cremamos una variable datos con los datos del
 * Cliente EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Customers', function(req, res) {
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
	var inserts = ['Customers', data, req.body.Id]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	
	excQuery(insertQuery,function(err,response){
		if (err) {
			res.status(400).json(err); 
		} else {
			res.json(response);
		}
	});
});

module.exports = router;