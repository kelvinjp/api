require('./connection');
var connectionpool = getConn();


/**
 * Funcion recive un Query y una funcion, la funcion debe recibir el resultado de la ejecusion del query y procesarlo
 */
excQuery = function (query, cb) {
    connectionpool.getConnection(function (err, connection) {
        var response = null;
        var error = null;
        if (err) {
            console.error('CONNECTION error: ', err);
            error = {
                "status": "error",
                "data": err,
                "message": "Error de conexion a la Base de Datos.",
                "code": err.code
            };
            cb(error, response);
        } else {
            connection.query(query, function (err, rows, fields) {
                if (err) {
                    console.log('Exc Error' + err);
                    error = {
                        "status": "error",
                        "data": err,
                        "message": "Error en la ejecusion de instruccion de DB.",
                        "code": err.code
                    };;
                } else {
                    response = {
                        "status": "success",
                        "data": rows
                    };
                }
                connection.release();
                cb(error, response);
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
excInsert = function (data, table, cb) {
    connectionpool.getConnection(function (err, connection) {
        var response = null;
        var error = null;
        if (err) {
            console.error('CONNECTION error: ', err);
            error = {
                "status": "error",
                "data": err,
                "message": "Error de conexion a la Base de Datos.",
                "code": err.code
            };
            cb(error, response);
        } else {
            connection.query("INSERT INTO `" + table + "` SET ?", data, function (err, result) {
                if (err) {
                    console.log('Insert Error' + err);
                    error = {
                        "status": "error",
                        "data": err,
                        "message": "Error en la ejecusion de instruccion de DB.",
                        "code": err.code
                    };
                } else {
                    response = {
                        "status": "success",
                        "data": result
                    };
                }
                connection.release();
                cb(error, response);
            });
        }
    });
}



log = function (toLog) {
    console.log(toLog);
}

jsonlog = function (coment, toLog) {
    console.log(coment + JSON.stringify(toLog));
}

/**
 * Funciones para validaciones de tipos de datos
 */
isInt = function (n) {
    return Number(n) === n && n % 1 === 0;
}

isFloat = function (n) {
    return Number(n) === n && n % 1 !== 0;
}

isString = function (n) {
    if ((typeof n === 'string' || n instanceof String) && n.length > 0 )
        return true;
    else
        return false;
}

vlCreateDocument = function (body) {
    error = null;
    if (!isString(body.CurrencyId)) {
        error = {
            "status": "fail",
            "message": "CurrencyId is not String"
        }
    }
    if (!isInt(body.CustomerId)) {
        error = {
            "status": "fail",
            "message": "CustomerId is not INT"
        }
    }
    if (!isInt(body.StatusId)) {
        error = {
            "status": "fail",
            "message": "StatusId is not INT"
        }
    }
    if (!isInt(body.TypeId)) {
        error = {
            "status": "fail",
            "message": "TypeId is not INT"
        }
    }
    if (!isInt(body.Enabled)) {
        error = {
            "status": "fail",
            "message": "Enabled is not INT"
        }
    }

    if((body.Date instanceof Date)){
        error = {
            "status": "fail",
            "message": "Date is not date type"
        }
    }

    if (error === null)
        return {
        "status": "success",
        "message": "Message validated"
        }
    else  return error; 

    //  "CurrencyId": "DOP", varchar Not NULL
    // "CustomerId": 1, INT NOT NULL
    // "StatusId": 1,  INT NOT NULL
    // "TypeId": 2,    INT NOT NULL
    // "Enabled": 1,   INT NOT NULL
    // "Date": "2016-06-01", DATE NOT NULL
    // "ExpirationDate": "2016-06-30", DATE 
    // "Status": "Status", NULL 
}