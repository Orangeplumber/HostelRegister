
// created by Orangeplumber on 14/12/17

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('complaintlist',['complaintlist']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/complaintlist',function (req,res) {
    console.log('Received GET request')
    
    db.complaintlist.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/complaintlist',function (req,res) {
    console.log(req.body);
    
    db.complaintlist.insert(req.body,function (err,doc) {
        res.json(doc);
    });
});

app.delete('/complaintlist/:id',function (req,res) {
    var id = req.params.id;
    console.log(id);
    
    db.complaintlist.remove({'_id' : mongojs.ObjectId(id)},function (err,doc) {
        res.json(doc);
    });
});

app.listen(3000)
console.log("Running at http://localhost:3000/")