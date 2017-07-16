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
 * Retorna una lista de todas las monedas
 *
 **************************************************/
router.get('/facturing/Units', function(req, res) {

	var query = "SELECT * FROM Units"; 
	queryString(query, req.query, function (q,pag) {
		jsonlog("Pagin....." , pag);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_Units.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna una moneda dado su Id
 *
 **************************************************/
router.get('/facturing/Units/:Id', function(req, res) {
	var query = "SELECT * FROM `Units` WHERE Id=?"; 
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
 * Elimina una moneda dado su Id
 *
 **************************************************/
router.delete('/facturing/Units/:Id', function(req, res) {
	var query = "DELETE FROM `Units` WHERE Id=?"; 
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




/***********************AGREGA Una moneda**************************
 * Para agregar una moneda cremamos una variable datos con los datos de
 * la moneda agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Units', function(req, res) {
		var ok = validateRequest(obj_Units.forms.items, req.body, true);
	if (ok.status === 'ok') {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 


	var data = 
			{
			"Id": req.body.Id,
			"Name": req.body.Name,
			"CreatedBy" : decoded.Username,
			"LastUpdatedBy" : decoded.Username
		};
	console.log(data);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Units', data]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	excQuery(insertQuery,function(err,response){
		if (err) {
			res.status(400).json(err); 
		} else {
			res.json(response);
		}
	});
	} else res.status(422).json(ok);	
});

/***********************EDITAR moneda**************************
 * Cremamos una variable datos con los datos de la
 * moneda EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Units', function(req, res) {
		var ok = validateRequest(obj_Units.forms.items, req.body, true);
	if (ok.status === 'ok') {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 

	var data = 
		{
			"Id": req.body.Id,
			"Name": req.body.Name,
			"LastUpdatedBy" : decoded.Username
		};

	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['Units', data, req.body.Id]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	
	excQuery(insertQuery,function(err,response){
		if (err) {
			res.status(400).json(err); 
		} else {
			res.json(response);
		}
	});
	} else res.status(422).json(ok);
});

module.exports = router;