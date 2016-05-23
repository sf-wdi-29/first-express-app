'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const taquerias = [
    {restaurant: "La Taqueria", id: 14},
    {restaurant: "El Farolito", id: 23},
    {restaurant: "Taqueria Cancun", id: 35}
];

app.use('views', './views');
app.use('view engine', 'ejs');

app.get('/', function(req, res){
    console.log("hello from root route");
    res.send("You're home \n");
});

app.get('/api/taquerias', function(req, res){
    res.json(taquerias);
});

app.listen(port, function(){
    console.log("Server started on port: ", port);
});