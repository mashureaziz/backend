const handleError = (err,req,res,next)=> {
    if(err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    handleError
}