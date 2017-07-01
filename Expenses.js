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
 * Retorna una lista de todos los gastos de una compania
 *
 **************************************************/
router.get('/facturing/Expenses', function(req, res) {
	var token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT * FROM Expenses WHERE CompaniesId = ?"; 
	
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
		
	queryString(query, req.query, function (q,pag) {
		jsonlog("Pagin....." , pag);
		excQuery(q, function (err, response) {
			if (err) {
				res.json(err);
			} else {
				response.forms = obj_Expenses.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un gasto dado su Id
 *
 **************************************************/
router.get('/facturing/Expenses/:Id', function(req, res) {
	var	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "SELECT * FROM `Expenses` WHERE Id=? AND CompaniesId= ? "; 
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
 * Elimina un gasto dado su Id
 *
 **************************************************/
router.delete('/facturing/Expenses/:Id', function(req, res) {
	var token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "DELETE FROM `Expenses` WHERE Id=? AND CompaniesId = ? "; 
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




/***********************AGREGA Un gasto**************************
 * Para agregar un gasto cremamos una variable datos con los datos de
 * l gasto agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Expenses', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 


	var data = {
    "SuppliersId": req.body.SuppliersId,
    "DocumentsId": req.body.DocumentsId,
    "CompaniesId": decoded.CompanyId,
    "Description": req.body.Description,
    "Date": req.body.Date,
    "Value": req.body.Value,
    "Status": req.body.Status,
    "CreatedBy": decoded.Username,
    "LastUpdatedBy": decoded.Username
};
	console.log(data);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Expenses', data]; 
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

/***********************EDITA gasto**************************
 * Cremamos una variable datos con los datos de la
  gasto EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Expenses', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 

	var data = {
    "SuppliersId": req.body.SuppliersId,
    "DocumentsId": req.body.DocumentsId,
    "CompaniesId": decoded.CompanyId,
    "Description": req.body.Description,
    "Date": req.body.Date,
    "Value": req.body.Value,
    "Status": req.body.Status,
    "CreatedBy": decoded.Username,
    "LastUpdatedBy": decoded.Username
};

	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?  AND CompaniesId = ?"; 
	var inserts = ['Expenses', data, req.body.Id,decoded.CompanyId]; 
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