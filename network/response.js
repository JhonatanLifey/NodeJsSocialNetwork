exports.success = function(req,res,message, status){
    let statuscode = status || 200;
    let statusMessage = message || 'Exito';

    res.status(status).send({
        error:false,
        status:status,
        body:message,
    });
}

exports.error = function(req,res,message, status){
    let statuscode = status || 500;
    let statusMessage = message || 'Internal server error';
    console.error(message);

    res.status(statuscode).send({
        error:true,
        status:status,
        body:message,
    });
}