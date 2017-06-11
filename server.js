var express = require('express'),
	app = express(),
	mysql = require('mysql')

 require('./connection'); 
var connectionpool = getConn(); 
/*
Modulos requeridos para la seguridad de las Urls
 */
   require('./funciones.js');
var bodyParser = require('body-parser');
var multer = require('multer');
var expressSession = require('express-session');
var moment = require('moment');

var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var secret = 'this is the secret secret secret 12356';


app.use('/facturing', expressJwt({secret: secret}));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: false
})); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data   

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,Origin, Accept');
	next();
});
/*
Solo para probar si al autenticacion HTTP funciona
 */
app.get('/', function(req, res) {
	res.json('Working...');
});

var usuarios = require("./usuarios");
app.use('/',usuarios);


//Aqui solo probamos que funciona la base de datos y que nos podemos conectar

app.get('/test', function(req, res) {
	log("test"); 
	var query = 'SELECT * FROM cliente'; 
	
	excQuery(query, function(err,response) {
		log('****************RESPONDI*************************'+response); 
		if(err){
			res.json(err); 
		}else{
			res.json(response); 
		}
	}); 
});
/****************************LOGIN LISTO********************
 * Metodo Post para loguearse:
 * 1ro- Verificamos que e usuario y password sean corectos y
 * procedemos a crear una session del lado del servidor usando passport.
 * 2do- Una vez autenticado el usuario, retornamos un JSON con los datos del usuario.
 * @param username
 * @param password
 * @return json del usuario o json vacio
 ************************************************************/
app.post('/login', function(req, res) {

	var username = req.body.email;
	var password = req.body.password;
	var query = "SELECT Id, CompanyId, Username, FirstName, LastName, Enabled, Created, CreatedBy, LastUpdated, LastUpdatedBy, email"
					+" FROM Users WHERE Username= ? AND Password= ?"; 
					
//var sql = "SELECT * FROM ?? WHERE ?? = ?";
var inserts = [username, password];
query = mysql.format(query, inserts);

	excQuery(query, function(err,response) {
		if(err){
			res.json(err); 
		}else{
			if (response.length > 0) {
						var profile = {
							Username: response[0].Username,
							Id:response[0].Id,
							CompanyId:response[0].CompanyId,
							date: response[0].Created,
						};
						console.log('Logeado corretamente como:' + profile.user + ' ' + profile.name);
						var token = jwt.sign(profile, secret, {
							expiresIn: 60 * 60
						});
						response[0].token = token;
						res.json(response[0]);
					} else {
						res.status(401).send('Wrong user or password');
					}
		}
	}); 
});

/**
 * Retorna una lista de todos los usuarios de una misma empresa
 *
 **************************************************/
app.get('/facturing/Users/', function(req, res) {
	
	token = req.headers.authorization.substring(7); 
	var decoded = jwt.verify(token, secret);
	log(decoded); 
	var query = "SELECT  Id, CompanyId, Username, FirstName, LastName, Enabled, Created, CreatedBy, LastUpdated, LastUpdatedBy, email"
				+" FROM Users WHERE CompanyId =?"; 
	var inserts = [decoded.CompanyId];
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
 * Retorna un usuario dado su Id
 *
 **************************************************/
app.delete('/facturing/Users/:Id', function(req, res) {
	var query = "DELETE FROM `Users`WHERE Id=?"; 
	var inserts = [req.params.Id];
		query = mysql.format(query, inserts);
	excQuery(query,function(err,response){
		if (err) {
			res.json(err); 
		} else {
			res.json(response[0]);
		}
	});
});




/***********************AGREGAR USUARIO LISTO**************************
 * Para agregar un usuario cremamos una variable datos con los datos del
 * usuario agregar y le pasamos esa variable al INSERT
 **********************************************************************/
app.post('/facturing/Users', function(req, res) {
	var email = req.body.email;
	
	if (email==='')
	email = null; 

	var data = {
    "CompanyId":req.body.CompanyId,
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
			if(response.length === 0){
				excQuery(insertQuery,function(errInsert,responseInsert){
					if (err) {
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
app.put('/facturing/Users', function(req, res) {
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

 var port = 8080; 
app.listen(port);
console.log('API Running on port:' + port);