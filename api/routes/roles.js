
const fs = require('fs');

var express = require('express');
var router = express.Router();
let rawdata = fs.readFileSync('./json/db.json');
let db = JSON.parse(rawdata);


router.get('/:dbId', function(req, res, next) {
   
    res.send(db.roles[req.params.dbId]);

});

router.get('', function(req, res, next) {
res.send(db.roles);
});


router.post('/',function(req,res){

// var query1=request.body.var1;
//var query2=request.body.var2;

var novo = JSON.parse(JSON.stringify(req.body)); 
novo.id=db.roles[db.roles.length-1].id+1;
db.roles.push(novo);
console.log(db.roles);
res.send("valeu");
let data = JSON.stringify(db);
fs.writeFileSync('./json/db.json', data);

});

router.delete('/:dbId', function(req, res, next) {
var id = parseInt(req.params.dbId);
for( var i = 0; i < db.roles.length; i++){
   
     if ( db.roles[i].id === id ) {
         
          db.roles.splice(i, 1); i--; 
          continue;
        }
    }
    let data = JSON.stringify(db);
fs.writeFileSync('./json/db.json', data);
    console.log(db.roles);
res.send("deleted")

});

router.patch('/:dbId', function(req, res, next) {


var id = parseInt(req.params.dbId);
var novo = JSON.parse(JSON.stringify(req.body)); 
for( var i = 0; i < db.roles.length; i++){
   
     if ( db.roles[i].id === id ) {
         console.log(db.roles[i]);
         db.roles[i].name=novo.name;
         db.roles[i].actions=novo.actions;
          continue;
        }
    }
    console.log(db.roles);
    let data = JSON.stringify(db);
    fs.writeFileSync('./json/db.json', data);1
    res.send("att");
});



module.exports = router;