
const fs = require('fs');

var express = require('express');
var router = express.Router();
let rawdata = fs.readFileSync('./json/db.json');
let db = JSON.parse(rawdata);



router.get('/:dbId', function(req, res, next) {
   
    res.send(db.actions[req.params.dbId]);

});

router.get('', function(req, res, next) {
res.send(db.actions);
});


router.post('/',function(req,res){

// var query1=request.body.var1;
//var query2=request.body.var2;

var novo = JSON.parse(JSON.stringify(req.body)); 
novo.id=db.users[db.actions.length-1].id+1;
db.actions.push(novo);
console.log(db.actions);
res.send("valeu");
let data = JSON.stringify(db);
fs.writeFileSync('./json/db.json', data);

});

router.delete('/:dbId', function(req, res, next) {
var id = parseInt(req.params.dbId);
for( var i = 0; i < db.actions.length; i++){
   
     if ( db.actions[i].id === id ) {
         
          db.actions.splice(i, 1); i--; 
          continue;
        }
    }
    let data = JSON.stringify(db);
fs.writeFileSync('./json/db.json', data);
    console.log(db.actions);
res.send("deleted")

});

router.patch('/:dbId', function(req, res, next) {


var id = parseInt(req.params.dbId);
var novo = JSON.parse(JSON.stringify(req.body)); 
for( var i = 0; i < db.actions.length; i++){
   
     if ( db.actions[i].id === id ) {
         console.log(db.actions[i]);
         db.actions[i].name=novo.name;
         db.actions[i].action=novo.action;
          continue;
        }
    }
    console.log(db.actions);
    let data = JSON.stringify(db);
    fs.writeFileSync('./json/db.json', data);1
    res.send("att");
});

module.exports = router;