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
 * Retorna una lista de todas comanias registradas
 *
 **************************************************/
router.get('/facturing/Companies', function(req, res) {
		var query = "SELECT * FROM Companies "; 
		queryString(query, req.query, function (q) {
		log(q);
		excQuery(q, function (err, response) {
			if (err) {
				res.json(err);
			} else {
				res.json(response);
			}
		});
	});
});


/**
 * Retorna una compania dado su Id
 *
 **************************************************/
router.get('/facturing/Companies/:Id', function(req, res) {
	var query = "SELECT * FROM `Companies` WHERE Id=?"; 
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
 * Elimina una compania dado su Id
 *
 **************************************************/
router.delete('/facturing/Companies/:Id', function(req, res) {
	var query = "DELETE FROM `Companies` WHERE Id=?"; 
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




/***********************AGREGA Una Compania**************************
 * Para agregar una compania cremamos una variable datos con los datos de
 * la compania agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Companies', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 


	var data = 
		{
			"MainCurrencyId": req.body.MainCurrencyId,
			"Name": req.body.Name,
			"IdentificationNumber": req.body.IdentificationNumber,
			"IdentificationType": req.body.IdentificationType,
			"Email": req.body.Email,
			"Phone": req.body.Phone,
			"Mobile": req.body.Mobile,
			"Fax": req.body.Fax,
			"AddressLine1": req.body.AddressLine1,
			"AddressLine2": req.body.AddressLine2,
			"City": req.body.City,
			"LogoUrl": req.body.LogoUrl,
			"State": req.body.State,
			"CountryId": req.body.CountryId,
			"CreatedBy": decoded.Username,
			"UpdatedBy": decoded.Username
		};
	console.log(data);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Companies', data]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	//Consultamos si existe
	excQuery(insertQuery,function(err,response){
		if (err) {
			res.json(err); 
		} else {
			res.json(response);
		}
	});	
});

/***********************EDITAR COMPANIA**************************
 * Cremamos una variable datos con los datos de la
 * compania EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Companies', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 

	var data = 
	{
			"MainCurrencyId": req.body.MainCurrencyId,
			"Name": req.body.Name,
			"IdentificationNumber": req.body.IdentificationNumber,
			"IdentificationType": req.body.IdentificationType,
			"Email": req.body.Email,
			"Phone": req.body.Phone,
			"Mobile": req.body.Mobile,
			"Fax": req.body.Fax,
			"AddressLine1": req.body.AddressLine1,
			"AddressLine2": req.body.AddressLine2,
			"City": req.body.City,
			"LogoUrl": req.body.LogoUrl,
			"State": req.body.State,
			"CountryId": req.body.CountryId,
			"UpdatedBy": decoded.Username
		};

	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['Companies', data, req.body.Id]; 
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