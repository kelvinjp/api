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
var Users = require("./Users"); 
var Companies = require("./Companies")
app.use('/',usuarios);
app.use('/',Users);
app.use('/', Companies); 




//Aqui solo probamos que funciona la base de datos y que nos podemos conectar

app.get('/test', function(req, res) {
	log("test"); 
	var query = 'SELECT * FROM Users'; 
	
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

 var port = 8080; 
app.listen(port);
console.log('API Running on port:' + port);