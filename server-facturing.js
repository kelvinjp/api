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


app.use('/facturing', expressJwt({ secret: secret }));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: false
})); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data   

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,Origin, Accept');
	next();
});
/*
Solo para probar si al autenticacion HTTP funciona
 */
app.get('/', function (req, res) {
	res.json('Working...');
});

var usuarios = require("./usuarios");
var Users = require("./Users");
var Companies = require("./Companies")
var Currencies = require("./Currencies")
var Categories = require("./Categories")
var Products = require("./Products")
var DocumentTypes = require("./DocumentTypes")
var DocumentsStatuses = require("./DocumentsStatuses")
var Customers = require("./Customers")
var Taxes = require("./Taxes")
var Documents = require("./Documents");
var Payments = require("./Payments");
var Units = require("./Units");
var SuppliersTypes = require("./SuppliersTypes");
var Suppliers = require("./Suppliers");
var Expenses = require("./Expenses");

app.use('/', usuarios);
app.use('/', Users);
app.use('/', Companies);
app.use('/', Currencies);
app.use('/', Categories);
app.use('/', Products);
app.use('/', DocumentTypes);
app.use('/', DocumentsStatuses);
app.use('/', Customers);
app.use('/', Taxes);
app.use('/', Documents);
app.use('/', Payments);
app.use('/', Units);
app.use('/', SuppliersTypes);
app.use('/', Suppliers);
app.use('/', Expenses);


/****************************LOGIN LISTO********************
 * Metodo Post para loguearse:
 * 1ro- Verificamos que e usuario y password sean corectos y
 * procedemos a crear una session del lado del servidor usando passport.
 * 2do- Una vez autenticado el usuario, retornamos un JSON con los datos del usuario.
 * @param username
 * @param password
 * @return json del usuario o json vacio
 ************************************************************/
app.post('/login', function (req, res) {

	var username = req.body.email;
	var password = req.body.password;
	var query = "SELECT Id,Type, CompanyId, Username, FirstName, LastName, Enabled, Created, CreatedBy, LastUpdated, LastUpdatedBy, email"
		+ " FROM Users WHERE ( Username= ? OR email= ?) AND Password= ?";

	//var sql = "SELECT * FROM ?? WHERE ?? = ?";
	var inserts = [username, username, password];
	query = mysql.format(query, inserts);

	excQuery(query, function (err, response) {
		if (err) {
			res.status(400).json(err);
		} else {
			if (response.data.length > 0) {
				var profile = {
					Username: response.data[0].Username,
					Id: response.data[0].Id,
					CompanyId: response.data[0].CompanyId,
					date: response.data[0].Created,
				};
				console.log('Logeado corretamente como:' + profile.Username + ' ' + profile.CompanyId);
				var token = jwt.sign(profile, secret, {
					expiresIn: 60 * 60 * 60 * 360
				});
				response.data[0].token = token;
				res.json(response.data[0]);
			} else {
				var retorno = {
					status: "fail",
					message: 'Wrong user or password'
				};
				res.status(401).json(retorno);
			}
		}
	});
});

app.get('/facturing/tableFields', function (req, res) {


	tableStructrure(req.query.tablename, function (response) {
		response.Object = {
			name: req.query.tablename,
			structure: obj_structure(response.data)
		}
		response.forms = { items: response.data };
		delete response.data;
		delete response.status;
		res.json(response);
	});
});


var port = 8080;
app.listen(port);
console.log('API Running on port:' + port);