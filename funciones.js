require('./connection'); 
var connectionpool = getConn(); 


/**
 * Funcion recive un Query y una funcion, la funcion debe recibir el resultado de la ejecusion del query y procesarlo
 */
excQuery = function (query, cb) {       
    	connectionpool.getConnection(function(err, connection) {
                var response = null;
                var error = null; 
                if (err) {
                    console.error('CONNECTION error: ', err);
                    error =  {
                        result: 'error',
                        errCode: err.code,
                        err: err
                    };
                    cb(error,response);
                } else {
                    connection.query(query, function(err, rows, fields) {
                        if (err) {
                            console.log('Exc Error'+err);
                            error= {
                                    result: 'error',
                                    errCode: err.code,
                                    errMessage: err
                                };
                        }else {
                            response = rows;
                        }	
                        connection.release();
                        cb(error,response);
                    });
                }
        });
}

/**
 * Datos de entrada:
 * Object representativo de la tabla
 * String con el nombre de la tabal
 * Funcion para el CallBack
 */
excInsert = function (data,table, cb) {       
    	connectionpool.getConnection(function(err, connection) {
                var response = null;
                var error = null;
                if (err) {
                    console.error('CONNECTION error: ', err);
                    error =  {
                        result: 'error',
                        errCode: err.code,
                        err: err
                    };
                    cb(error, response);
                } else {
                    connection.query("INSERT INTO `"+ table +"` SET ?", data, function(err, result) {
                        if (err) {
                            console.log('Insert Error'+ err);
                            error = {
                                    result: 'error',
                                    errCode: err.code,
                                    errMessage: err
                                };
                        }else {
                            response = result;
                        }	
                        connection.release();
                        cb(error, response);
                    });
                }
        });
}


log = function (toLog){
    console.log(toLog); 
}

jsonlog = function (coment,toLog){
    console.log(coment + JSON.stringify(toLog)); 
}