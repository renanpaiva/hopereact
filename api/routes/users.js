
const fs = require('fs');

var express = require('express');
var router = express.Router();
let rawdata = fs.readFileSync('./json/db.json');
let db = JSON.parse(rawdata);

router.get('/:dbId', function(req, res, next) {
   
        res.send(db.users[req.params.dbId]);
   
});

router.get('', function(req, res, next) {
    res.send(db.users);
});


router.post('/',function(req,res){
   
    // var query1=request.body.var1;
    //var query2=request.body.var2;
    
    var novo = JSON.parse(JSON.stringify(req.body)); 
    novo.id=db.users[db.users.length-1].id+1;
    db.users.push(novo);
    console.log(db.users);
    res.send("valeu");
    let data = JSON.stringify(db);
    fs.writeFileSync('./json/db.json', data);

    });

router.delete('/:dbId', function(req, res, next) {
    var id = parseInt(req.params.dbId);
    for( var i = 0; i < db.users.length; i++){
       
         if ( db.users[i].id === id ) {
             
              db.users.splice(i, 1); i--; 
              continue;
            }
        }
        let data = JSON.stringify(db);
    fs.writeFileSync('./json/db.json', data);
        console.log(db.users);
    res.send("deleted")

});

router.patch('/:dbId', function(req, res, next) {
   
    
    var id = parseInt(req.params.dbId);
    var novo = JSON.parse(JSON.stringify(req.body)); 
    for( var i = 0; i < db.users.length; i++){
       
         if ( db.users[i].id === id ) {
             console.log(db.users[i]);
             db.users[i].name=novo.name;
             db.users[i].role=novo.role;
              continue;
            }
        }
        console.log(db.users);
        let data = JSON.stringify(db);
        fs.writeFileSync('./json/db.json', data);1
        res.send("att");
});



module.exports = router;