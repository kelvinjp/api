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
router.get('/facturing/Categories', function(req, res) {

	var query = "SELECT * FROM Categories"; 
	queryString(query, req.query, function (q,pag) {
		jsonlog("Pagin....." , pag);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_Categories.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna una moneda dado su Id
 *
 **************************************************/
router.get('/facturing/Categories/:Id', function(req, res) {
	var query = "SELECT * FROM `Categories` WHERE Id=?"; 
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
router.delete('/facturing/Categories/:Id', function(req, res) {
	var query = "DELETE FROM `Categories` WHERE Id=?"; 
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
router.post('/facturing/Categories', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 


	var data = 
			{
			"Name": req.body.Name,
			"ParentCategoryId": req.body.ParentCategoryId,
			"CreatedBy" : decoded.Username,
			"UpdatedBy" : decoded.Username
		};
	console.log(data);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Categories', data]; 
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

/***********************EDITAR moneda**************************
 * Cremamos una variable datos con los datos de la
 * moneda EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Categories', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 

	var data = 
		{
			"Enabled" : req.body.Enabled,
			"Name" : req.body.Name,
			"ParentCategoryId": req.body.ParentCategoryId,
			"UpdatedBy" : decoded.Username
		};

	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['Categories', data, req.body.Id]; 
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