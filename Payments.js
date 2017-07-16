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
 * Retorna una lista de todos los pagos 
 *
 **************************************************/
router.get('/facturing/Payments', function (req, res) {
	token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);
	if(req.query.sort == undefined){
		req.query.sort = 'P.Id desc'; 
	}
	else{

		if(req.query.sort.charAt(0) === '-'){
			req.query.sort = 'P.'+req.query.sort.slice(1) + ' DESC'; 
		}else{
			req.query.sort = 'P.'+req.query.sort.slice(1) + ' ASC';
		}
	}
	var query = "SELECT P.* FROM Payments P inner JOIN  Documents D ON D.Id = P.DocumentsId WHERE D.CompaniesId = ? ";
	var inserts = [decoded.CompanyId];
	query = mysql.format(query, inserts);

	queryString(query, req.query, function (q, pag) {
		log(q);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_Payments.forms;
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un Payment dado su Id
 *
 **************************************************/
router.get('/facturing/Payments/:Id', function (req, res) {

	var query = "SELECT * FROM `Payments`WHERE Id=? ";
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
 * Elimina un Payment dado su Id
 *
 **************************************************/
router.delete('/facturing/Payments/:Id', function (req, res) {
	token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);

	var query = "DELETE FROM `Payments` WHERE Id=?";
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




/***********************AGREGAR Payment LISTO**************************
 * Para agregar un Payment cremamos una variable datos con los datos del
 * Payment agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Payments', function (req, res) {
		var ok = validateRequest(obj_Payments.forms.items, req.body, false);
	if (ok.status === 'ok') {
token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);
	jsonlog("Decode: ", decoded);
	var data =
		{
			"CurrencyId": req.body.CurrencyId,
			"DocumentsId": req.body.DocumentsId,
			"Date": req.body.Date,
			"Type": req.body.Type,
			"Amount": req.body.Amount,
			"ExchangeRate": req.body.ExchangeRate,
			"Reference": req.body.Reference,
			"Memo": req.body.Memo,
			"CreatedBy": decoded.Username,
			"UpdatedBy": decoded.Username
		};
	console.log(data);

	var insertQuery = "INSERT INTO ?? SET ?";
	var inserts = ['Payments', data];
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery);
	excQuery(insertQuery, function (errInsert, responseInsert) {
		if (errInsert) {
			res.json(errInsert);
		} else {
			res.json(responseInsert);
		}
	});
	} else res.status(422).json(ok);
});

/***********************EDITAR Payment LISTO**************************
 * Para EDITAR un Payment cremamos una variable datos con los datos del
 * Payment EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Payments', function (req, res) {
	var ok = validateRequest(obj_Payments.forms.items, req.body, true);
	if (ok.status === 'ok') {

	token = req.headers.authorization.substring(7);
	var decoded = jwt.verify(token, secret);

	var email = req.body.email;
	var data =
		{
			"CurrencyId": req.body.CurrencyId,
			"DocumentsId": req.body.DocumentsId,
			"Date": req.body.Date,
			"Enabled": req.body.Enabled,
			"Type": req.body.Type,
			"Amount": req.body.Amount,
			"ExchangeRate": req.body.ExchangeRate,
			"Reference": req.body.Reference,
			"Memo": req.body.Memo,
			"UpdatedBy": decoded.Username
		}; 
	jsonlog("UPDATE: ", data);

	var insertQuery = "UPDATE  ?? SET ? WHERE Id=? ";
	var inserts = ['Payments', data, req.body.Id];
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery);

	excQuery(insertQuery, function (err, response) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(response);
		}
	});
	} else res.status(422).json(ok);
});

module.exports = router;