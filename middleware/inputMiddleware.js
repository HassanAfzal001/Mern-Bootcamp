const handleOptions = (req, res, next) => {
    // * means select all ports for localhost
    res.setHeaders('Access-Control-Allow-Origin','*');
    res.setHeaders('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    
    if(req.method == 'OPTIONS') {
        return res.sendStatus(200);
    }
}

module.exports = {
    handleOptions
}