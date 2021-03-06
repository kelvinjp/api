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
 * Retorna una lista de todos los productos de una misma empresa
 *
 **************************************************/
router.get('/facturing/Products', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT  * FROM Products WHERE CompanyId =?"; 
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
	
	queryString(query, req.query, function (q,pag) {
		log(q);
		excQuery(q, function (err, response) {
			if (err) {
				res.status(400).json(err);
			} else {
				response.forms = obj_Products.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un Producto dado su Id
 *
 **************************************************/
router.get('/facturing/Products/:Id', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "SELECT * FROM `Products`WHERE Id=? and CompanyId =?"; 
	var inserts = [req.params.Id,decoded.CompanyId];
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
 * Elimina un Producto dado su Id
 *
 **************************************************/
router.delete('/facturing/Products/:Id', function(req, res) {
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	
	var query = "DELETE FROM `Products` WHERE Id=? and CompanyId =?";  
	var inserts = [req.params.Id,decoded.CompanyId];
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




/***********************AGREGAR Producto LISTO**************************
 * Para agregar un Producto cremamos una variable datos con los datos del
 * Producto agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/facturing/Products', function(req, res) {
	var ok = validateRequest(obj_Products.forms.items, req.body, false);
	if (ok.status === 'ok') {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);

	var data = 
	{
    "CategoriesId": req.body.CategoriesId,
    "CompanyId": decoded.CompanyId,
    "Name": req.body.Name,
    "Cost": req.body.Cost,
    "Price": req.body.Price,
	"Description": req.body.Description,
    "TaxesId": req.body.TaxesId,
    "UnitsId":req.body.UnitsId,
    "CreatedBy": decoded.Username,
    "UpdatedBy": decoded.Username
}; 
	console.log(data);
	var existe = false;

	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Products', data]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	//Consultamos si existe
	
	excQuery(insertQuery,function(errInsert,responseInsert){
		if (errInsert) {
			res.json(errInsert); 
		} else {
			res.json(responseInsert);
		}
	});
	} else res.status(422).json(ok);
});

/***********************EDITAR Producto LISTO**************************
 * Para EDITAR un Producto cremamos una variable datos con los datos del
 * Producto EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Products', function(req, res) {
	var ok = validateRequest(obj_Products.forms.items, req.body, true);
	if (ok.status === 'ok') {
		token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);

	var email = req.body.email;
	
	if (email==='')
	email = null; 

		var data = 
				{
				"CategoriesId": req.body.CategoriesId,
				"CompanyId": decoded.CompanyId,
				"Name": req.body.Name,
				"Cost": req.body.Cost,
				"Price": req.body.Price,
				"Description": req.body.Description,
				"TaxesId": req.body.TaxesId,
				"UnitsId": req.body.UnitsId,
				"Enabled": req.body.Enabled,
				"UpdatedBy": decoded.Username
			};
	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['Products', data, req.body.Id, decoded.CompanyId]; 
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