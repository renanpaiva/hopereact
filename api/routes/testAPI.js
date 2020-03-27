var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   
    res.send(req.query.nome);
});

module.exports = router;