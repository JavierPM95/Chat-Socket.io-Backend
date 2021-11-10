const response = {};

response.response = (error, res, code, status, message, content) => {
    if (error)
    res.status(code).json({ 
        status: false,
        message: message || 'internal error'
    });

    else
    res.status(code).json({ 
        status: status || false, 
        message, 
        content
    });
}


module.exports = response;