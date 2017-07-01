var mysql = require('mysql');

var connectionpool = mysql.createPool({
		host: '45.55.242.157',
		user: 'kelvin',
		password: 'kj4233pb',
		database: 'facturing'
  // ,connectionLimit: 10,
  //  supportBigNumbers: true
	});

getConn = function  () {
    return connectionpool;                // Function returns the product of a and b
}