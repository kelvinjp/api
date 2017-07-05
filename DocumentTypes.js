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
 * Retorna una lista de todos los tipos de documentos 
 *
 **************************************************/
router.get('/facturing/DocumentTypes/', function (req, res) {
	var query = "SELECT  * FROM DocumentTypes";
	queryString(query, req.query, function (q,pag) {
		log(q);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_DocumentTypes.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un Tipos de documentos dado su Id
 *
 **************************************************/
router.get('/facturing/DocumentTypes/:Id', function (req, res) {

	var query = "SELECT * FROM `DocumentTypes`WHERE Id=? ";
	var inserts = [req.params.Id];
	query = mysql.format(query, inserts);
	excQuery(query, function (err, response) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(response);
		}
	});
});


/**
 * Elimina un Tipos de documentos dado su Id
 *
 **************************************************/
router.delete('/facturing/DocumentTypes/:Id', function (req, res) {
	token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);

	var query = "DELETE FROM `DocumentTypes` WHERE Id=?";
	var inserts = [req.params.Id];
	query = mysql.format(query, inserts);
	excQuery(query, function (err, response) {
		if (err) {
			log("Err..." + err)
			res.status(400).json(err);
		} else {
			jsonlog("res..." + response)
			res.json(response);
		}
	});
});




/***********************AGREGAR Tipos de documentos LISTO**************************
 * Para agregar un Tipos de documentos cremamos una variable datos con los datos del
 * Tipos de documentos agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/DocumentTypes', function (req, res) {
	token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);

	var data =
		{
			"Name": req.body.Name,
			"CreatedBy": decoded.Username,
			"LastUpdatedBy": decoded.Username
		};
	console.log(data);

	var insertQuery = "INSERT INTO ?? SET ?";
	var inserts = ['DocumentTypes', data];
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery);
	excQuery(insertQuery, function (errInsert, responseInsert) {
		if (errInsert) {
			res.json(errInsert);
		} else {
			res.json(responseInsert);
		}
	});
});

/***********************EDITAR Tipos de documentos LISTO**************************
 * Para EDITAR un Tipos de documentos cremamos una variable datos con los datos del
 * Tipos de documentos EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/DocumentTypes', function (req, res) {
	token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);

	var email = req.body.email;

	if (email === '')
		email = null;

	var data =
		{
			"Name": req.body.Name,
			"LastUpdatedBy": decoded.Username
		};
	jsonlog("UPDATE: ", data);

	var insertQuery = "UPDATE  ?? SET ? WHERE Id=? ";
	var inserts = ['DocumentTypes', data, req.body.Id];
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery);

	excQuery(insertQuery, function (err, response) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(response);
		}
	});
});

module.exports = router;