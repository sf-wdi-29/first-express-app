'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const taquerias = [
{restaurant: "La Taqueria", id: 1},
{restaurant: "El Farolito", id: 2},
{restaurant: "Taqueria Cancun", id: 3}
];

app.get('/', function(req, res){
    res.send("You're home \n");
});

app.get('/api/taquerias', function(req, res){
    res.json(taquerias);
});

app.listen(port, function(){
    console.log("Server started on port: ", port);
});