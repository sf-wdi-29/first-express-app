'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const  bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const taquerias = [
    {restaurant: "La Taqueria", id: 14},
    {restaurant: "El Farolito", id: 23},
    {restaurant: "Taqueria Cancun", id: 35}
];

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', router);

router.get('/', function(req, res){
    console.log("hello from root route");
    // res.send("You're home \n");
    res.render('index', {header: 'index'});
});

router.get('/form', function(req, res){
    res.render('form', {header: 'form'});
});


router.get('/api/taquerias', function(req, res){
    res.json(taquerias);
});

router.get('/api/taquerias/:id', function(req, res){
    for(var i = 0; i < taquerias.length; i++){
        if( req.params.id == taquerias[i].id){
            res.json(taquerias[i]);
        }
    }
});

router.post('/api/taquerias', urlencodedParser, function(req, res){
    if (!req.body){
     return res.sendStatus(400);
     } else {
        if (typeof(req.body.id === 'string')){
            var numericId = parseInt(req.body.id);
            req.body.id = numericId;
        };
        taquerias.push(req.body);
        res.json(taquerias);
    }
});


app.listen(port, function(){
    console.log("Server started on port: ", port);
});