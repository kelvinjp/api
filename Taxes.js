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
 * Retorna una lista de todos los impuests de documentos 
 *
 **************************************************/
router.get('/facturing/Taxes', function(req, res) {
	
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT  * FROM Taxes WHERE CompaniesId =?"; 
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
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
 * Retorna un Impuesto dado su Id
 *
 **************************************************/
router.get('/facturing/Taxes/:Id', function(req, res) {
	
	var query = "SELECT * FROM `Taxes`WHERE Id=? "; 
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
 * Elimina un Impuesto dado su Id
 *
 **************************************************/
router.delete('/facturing/Taxes/:Id', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "DELETE FROM `Taxes` WHERE Id=?";  
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




/***********************AGREGAR Impuesto LISTO**************************
 * Para agregar un Impuesto cremamos una variable datos con los datos del
 * Impuesto agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Taxes', function(req, res) {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);

	var data = 
		{
			"CompaniesId": decoded.CompanyId,
			"Name": req.body.Name,
			"value": req.body.value,
			"CretatedBy": decoded.Username,
			"UpdateBy": decoded.Username
		}; 
	console.log(data);

	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Taxes', data]; 
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

/***********************EDITAR Impuesto LISTO**************************
 * Para EDITAR un Impuesto cremamos una variable datos con los datos del
 * Impuesto EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Taxes', function(req, res) {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);

	var email = req.body.email;
		var data = 
		{
			"CompaniesId": decoded.CompanyId,
			"Name": req.body.Name,
			"Enabled":req.body.Enabled,
			"value": req.body.value,
			"UpdateBy": decoded.Username
		}; 
	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=? "; 
	var inserts = ['Taxes', data, req.body.Id]; 
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