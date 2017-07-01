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
 * Retorna una lista de todos los usuarios de una misma empresa
 *
 **************************************************/
router.get('/facturing/Users', function(req, res) {
	
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT  Id, CompanyId, Username, FirstName, LastName, Enabled, Created, CreatedBy, LastUpdated, LastUpdatedBy, email"
				+" FROM Users WHERE CompanyId =?"; 
	var inserts = [decoded.CompanyId];
		query = mysql.format(query, inserts);
	
	queryString(query, req.query, function (q,pag) {
		log(q);
		excQuery(q, function (err, response) {
			if (err) {
				res.json(err);
			} else {
				response.forms = obj_Users.forms; 
				res.json(addPaginToResponse(response, pag));
			}
		});
	});
});


/**
 * Retorna un usuario dado su Id
 *
 **************************************************/
router.get('/facturing/Users/:Id', function(req, res) {
	var query = "SELECT Id, CompanyId, Username, FirstName, LastName, Enabled, Created, CreatedBy, LastUpdated, LastUpdatedBy, email FROM `Users`WHERE Id=?"; 
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
 * Elimina un usuario dado su Id
 *
 **************************************************/
router.delete('/facturing/Users/:Id', function(req, res) {
	var query = "DELETE FROM `Users` WHERE Id=?"; 
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




/***********************AGREGAR USUARIO LISTO**************************
 * Para agregar un usuario cremamos una variable datos con los datos del
 * usuario agregar y le pasamos esa variable al INSERT
 **********************************************************************/
router.post('/Users', function(req, res) {
	var email = req.body.email;
	
	if (email==='')
	email = null; 

	var data = {
    "CompanyId":req.body.CompanyId,
	"TypeId": req.body.TypeId,
    "Username":req.body.Username, 
    "Password":req.body.Password,
    "FirstName":req.body.FirstName, 
    "LastName":req.body.LastName, 
    "Enabled":1, 
    "email":email,
	"CreatedBy":req.body.Username
};
	console.log(data);
	var existe = false;

	var queryExiste = "SELECT * FROM  Users WHERE  `Username`=  ? OR Email =? AND email is not null"; 
	var inserts = [data.Username, data.email];
		queryExiste = mysql.format(queryExiste, inserts);
	
	var insertQuery = "INSERT INTO ?? SET ?"; 
	var inserts = ['Users', data]; 
	insertQuery = mysql.format(insertQuery, inserts);
	log(insertQuery); 
	//Consultamos si existe
	excQuery(queryExiste, function(err,response) {
		jsonlog('****************Consulta Existe**********',response);
		if(err){
			res.json(err); 
		} else {
			//Si no existe el user o email, procedemos a crearlo
			jsonlog("Users Response:" , response); 
			if(response.data.length === 0){
				excQuery(insertQuery,function(errInsert,responseInsert){
					if (errInsert) {
						res.json(errInsert); 
					} else {
						res.json(responseInsert);
					}
				});
			} else {
				var retorno = {
						estado: false,
						comentario: 'Usuario/Email ya existe.'
					};
				res.json(retorno);
			}
		}
	}); 
});

/***********************EDITAR USUARIO LISTO**************************
 * Para EDITAR un usuario cremamos una variable datos con los datos del
 * usuario EDITAR y le pasamos esa variable al UPDATE
 **********************************************************************/
router.put('/facturing/Users', function(req, res) {
	var email = req.body.email;
	
	if (email==='')
	email = null; 

	var data = {
    "LastUpdatedBy":req.body.Username,
    "Password":req.body.Password,
    "FirstName":req.body.FirstName, 
    "LastName":req.body.LastName, 
    "email":email,
	"LastUpdated":moment().format('YYYY-MM-DD HH:mm:ss')
};
	jsonlog("UPDATE: ",data);
	
	var insertQuery = "UPDATE  ?? SET ? WHERE Id=?"; 
	var inserts = ['Users', data, req.body.Id]; 
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