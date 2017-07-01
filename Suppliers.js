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
router.get('/facturing/Suppliers', function(req, res) {
	var token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT * FROM Suppliers WHERE CompaniesId = ?"; 
	
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
		
	queryString(query, req.query, function (q,pag) {
		jsonlog("Pagin....." , pag);
		excQuery(q, function (err, response) {
			if (err) {
				res.json(err);
			} else {
				response.forms = obj_Suppliers.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un tipo de suplidor dado su Id
 *
 **************************************************/
router.get('/facturing/Suppliers/:Id', function(req, res) {
	var	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "SELECT * FROM `Suppliers` WHERE Id=? AND CompaniesId= ? "; 
	var inserts = [req.params.Id,decoded.CompanyId];
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
 * Elimina un tipo de suplidor dado su Id
 *
 **************************************************/
router.delete('/facturing/Suppliers/:Id', function(req, res) {
	var token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "DELETE FROM `Suppliers` WHERE Id=? AND CompaniesId = ? "; 
	var inserts = [req.params.Id,decoded.CompanyId];
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




/***********************AGREGA Un tipo de suplidor**************************
 * Para agregar un tipo de suplidor cremamos una variable datos con los datos de
 * l tipo de suplidor agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Suppliers', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 


	var data = {
    "CompaniesId": decoded.CompanyId,
    "SuppliersTypesId": req.body.SuppliersTypesId,
    "Name": req.body.Name,
    "IdentificationNumber": req.body.IdentificationNumber,
    "IdentificationType": req.body.IdentificationType,
    "Phone": req.body.Phone,
    "CreatedBy": decoded.Username,
    "LastUpdatedBy": decoded.Username
};
	console.log(data);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Suppliers', data]; 
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

/***********************EDITA tipo de suplidor**************************
 * Cremamos una variable datos con los datos de la
  tipo de suplidor EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Suppliers', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 

	var data = {
    "SuppliersTypesId": req.body.SuppliersTypesId,
    "Name": req.body.Name,
    "IdentificationNumber": req.body.IdentificationNumber,
    "IdentificationType": req.body.IdentificationType,
    "Phone": req.body.Phone,
    "CreatedBy": decoded.Username,
    "LastUpdatedBy": decoded.Username
};

	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['Suppliers', data, req.body.Id]; 
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