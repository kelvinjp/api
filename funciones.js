require('./connection');
require('./Utils/tables')

var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var validator = require('validator');
var connectionpool = getConn();



var secret = 'this is the secret secret secret 12356';

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
                    log('---------------------------');
                    log('Exc Error' + err);
                    jsonlog("In error", err);
                    error = {
                        "status": "error",
                        "data": err,
                        "message": "Error en la ejecusion de instruccion de DB.",
                        "code": err.code
                    };
                    log('----------Error-----------------');
                    log(error);
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
    n = parseInt(n);
    return Number(n) === n && n % 1 === 0;
}
//valida si es INT o FLOAT
isFloat = function (n) {
    n = parseFloat(n);
    log(n);
    return Number(n) === n && (n % 1 !== 0 || n % 1 === 0);
}

isString = function (n) {
    if ((typeof n === 'string' || n instanceof String) && n.length > 0)
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

    if ((body.Date instanceof Date)) {
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
    else return error;

    //  "CurrencyId": "DOP", varchar Not NULL
    // "CustomerId": 1, INT NOT NULL
    // "StatusId": 1,  INT NOT NULL
    // "TypeId": 2,    INT NOT NULL
    // "Enabled": 1,   INT NOT NULL
    // "Date": "2016-06-01", DATE NOT NULL
    // "ExpirationDate": "2016-06-30", DATE 
    // "Status": "Status", NULL 
}

queryString = function (query, strQuery, CallBack) {
    var limit = (strQuery.limit == undefined ? 20 : parseInt(strQuery.limit));
    var offset = (strQuery.offset == undefined ? 0 : parseInt(strQuery.offset));
    var sort = (strQuery.sort == undefined ? '-Id' : strQuery.sort);
    delete strQuery.limit;
    delete strQuery.offset;
    delete strQuery.sort;

    var like = ' AND (';
    var likeInsert = [];
    var objItems = Object.keys(strQuery);
    objItems.forEach(function (key, index, objItems) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        like = like + key + ' LIKE "%?%" ';
        likeInsert[index] = strQuery[key];
        if (index != objItems.length - 1) {
            like = like + ' AND '
        }
    });
    if (like != ' AND (') {
        like = like + ' ) ORDER BY ? ';
    } else {
        like = ' ORDER BY ? '
    }
    likeInsert[likeInsert.length] = sort;

    like = mysql.format(like, likeInsert);
    like = like.replace(/\'/g, "");
    likeInsert = [];

    var strCount = "SELECT COUNT(*) AS TOTAL_ROWS FROM   (" + query + like + " ) as result ";

    query = "SELECT * FROM   (" + query + like + " ) as result   limit ? offset ?";


    likeInsert[likeInsert.length] = limit;
    likeInsert[likeInsert.length] = offset;

    query = mysql.format(query, likeInsert);
    //Busca la cantidad de registros en la db. 
    var pag = null;
    log(strCount);
    excQuery(strCount, function (errCount, responseCount) {
        if (errCount) {
            jsonlog("Err Getting Count: " + errCount);
        } else {
            jsonlog("responseCount", responseCount);
            pag = pagin(responseCount.data[0].TOTAL_ROWS, limit, offset);
            CallBack(query, pag);
        }
    });
}

pagin = function (total, limit, offset) {
    var pag = {
        "size": total,
        "offset": offset,
        "limit": limit,
        "first": {
            "offset": 0,
            "limit": limit
        },
        "last": {
            "offset": (total <= limit ? 0 : Math.ceil(total / limit) - 1),
            "limit": limit
        }
    }
    return pag;
}

addPaginToResponse = function (response, pag) {
    response.size = pag.size;
    response.offset = pag.offset;
    response.limit = pag.limit;
    response.first = pag.first;
    response.last = pag.last;
    return response;

}

tableStructrure = function (tablename, CallBack) {
    var query = "SELECT DISTINCT " +
        " COLUMN_NAME AS name," +
        " if(IS_NULLABLE= 'NO', 'true', 'false') as requiered," +
        " case DATA_TYPE" +
        " when  'varchar' then 'string'" +
        " when  'datetime' then 'date'" +
        " else  'number' END " +
        " as type, " +
        " CHARACTER_MAXIMUM_LENGTH as max," +
        " NULL AS min," +
        " 'false' as editable   FROM " +
        " INFORMATION_SCHEMA.COLUMNS  WHERE" +
        " TABLE_NAME ='" + tablename + "'";
    log(query);
    excQuery(query, function (errCount, response) {
        if (errCount) {
            jsonlog("Structure: " + errCount);
        } else {
            jsonlog("Structure", response);
            CallBack(response);
        }
    });
}

newToken = function (Username, Id, CompanyId, date) {
    var profile = {
        Username: Username,
        Id: Id,
        CompanyId: CompanyId,
        date: date,
    };
    var token = jwt.sign(profile, secret, {
        expiresIn: 60 * 60 * 60 * 360
    });
    return token;
}

obj_structure = function (array_obj) {

    var obj = {};
    for (var x = 0; x < array_obj.length; x++) {
        obj[array_obj[x].name] = null;
    }
    jsonlog("obj...", obj)
    return obj;
}


validateRequest = function (array_obj, req, validateId) {
jsonlog("array ",array_obj); 
    var err = [];
    //recorremos las propiedades del obj
    for (var x = 0; x < array_obj.length; x++) {
        //si el campo es requerido validamos que sea distinto de null y undefined
        if (array_obj[x].requiered === true) {
            if (validateId === true) {
                //si es de tipo number validamos que lo sea.
                switch (array_obj[x].type) {
                    case "number":
                        if (!isfloat(req[array_obj[x].name]))
                            err.push("Param " + array_obj[x].name + "is not valid or is empty.");
                    default:
                        if (!isString(req[array_obj[x].name]))
                            err.push("Param " + array_obj[x].name + "is not valid or is empty.");
                }
            } else {
                if (array_obj[x].name != 'Id') {
                    //si es de tipo number validamos que lo sea.
                     // console.log(array_obj[x].name+" "+req[array_obj[x].name]+ " valicion pass "+ !isFloat(req[array_obj[x].name]))
                      
                    switch (array_obj[x].type) {
                        case "number":
                            if (!isFloat(req[array_obj[x].name])){
                                err.push("Param " + array_obj[x].name + " is not a valid "+ array_obj[x].type)
                            }
                            break;
                        default:
                            if (!isString(req[array_obj[x].name])){
                                err.push("Param " + array_obj[x].name + " is not a valid "+ array_obj[x].type);
                            }
                    }
                }
            }

        }
    }
    jsonlog("Validaciones...", err)
    return err;
}
