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
 * Retorna una lista de todos los tipos de suplidores
 *
 **************************************************/
router.get('/facturing/SuppliersTypes', function(req, res) {

	var query = "SELECT * FROM SuppliersTypes"; 
	queryString(query, req.query, function (q,pag) {
		jsonlog("Pagin....." , pag);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_SuppliersTypes.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un tipo de suplidor dado su Id
 *
 **************************************************/
router.get('/facturing/SuppliersTypes/:Id', function(req, res) {
	var query = "SELECT * FROM `SuppliersTypes` WHERE Id=?"; 
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
 * Elimina un tipo de suplidor dado su Id
 *
 **************************************************/
router.delete('/facturing/SuppliersTypes/:Id', function(req, res) {
	var query = "DELETE FROM `SuppliersTypes` WHERE Id=?"; 
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




/***********************AGREGA Un tipo de suplidor**************************
 * Para agregar un tipo de suplidor cremamos una variable datos con los datos de
 * l tipo de suplidor agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/SuppliersTypes', function(req, res) {
		var ok = validateRequest(obj_SuppliersTypes.forms.items, req.body, false);
	if (ok.status === 'ok') {
	
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 


	var data = 
			{
			"Name": req.body.Name,
			"CompaniesId":decoded.CompanyId,
			"CreatedBy" : decoded.Username,
			"LastUpdatedBy" : decoded.Username
		};
	console.log(data);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['SuppliersTypes', data]; 
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

/***********************EDITA tipo de suplidor**************************
 * Cremamos una variable datos con los datos de la
  tipo de suplidor EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/SuppliersTypes', function(req, res) {
		var ok = validateRequest(obj_SuppliersTypes.forms.items, req.body, true);
	if (ok.status === 'ok') {
	
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 

	var data = 
		{
			"Name": req.body.Name,
			"LastUpdatedBy" : decoded.Username
		};

	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['SuppliersTypes', data, req.body.Id]; 
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