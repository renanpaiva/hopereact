
const fs = require('fs');

var express = require('express');
var router = express.Router();
let rawdata = fs.readFileSync('./json/db.json');
let db = JSON.parse(rawdata);

router.get('users/:dbId', function(req, res, next) {
   
        res.send(db.users[req.params.dbId]);
   
});

router.get('', function(req, res, next) {
    res.send(db.users);
});


router.post('users/',function(req,res){
   
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

router.delete('users/:dbId', function(req, res, next) {
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

router.patch('users/:dbId', function(req, res, next) {
   
    
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



router.get('roles/:dbId', function(req, res, next) {
   
    res.send(db.roles[req.params.dbId]);

});

router.get('roles/', function(req, res, next) {
res.send(db.roles);
});


router.post('roles/',function(req,res){

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

router.delete('roles/:dbId', function(req, res, next) {
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

router.patch('roles/:dbId', function(req, res, next) {


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



router.get('actions/:dbId', function(req, res, next) {
   
    res.send(db.actions[req.params.dbId]);

});

router.get('actions/', function(req, res, next) {
res.send(db.actions);
});


router.post('actions/',function(req,res){

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

router.delete('actions/:dbId', function(req, res, next) {
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

router.patch('actions/:dbId', function(req, res, next) {


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