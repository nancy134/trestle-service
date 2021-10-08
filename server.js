
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const trestleService = require('./trestle');


const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/properties', (req, res) => {
    trestleService.getProperties(req.body).then(function(properties){
        res.json(properties);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/members', (req, res) => {
    trestleService.getProperties(req.body).then(function(member){
        res.json(member);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/offices', (req, res) => {
    trestleService.getProperties(req.body).then(function(office){
        res.json(office);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/openhouses', (req, res) => {
    trestleService.getProperties(req.body).then(function(openhouse){
        res.json(openhouse);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/properties/:id', (req, res) => {
    trestleService.getProperty(req.params.id, req.body).then(function(property){
        res.json(property);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/members/:id', (req, res) => {
    trestleService.getProperty(req.params.id, req.body).then(function(member){
        res.json(member);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/offices/:id', (req, res) => {
    trestleService.getProperty(req.params.id, req.body).then(function(office){
        res.json(office);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/openhouses/:id', (req, res) => {
    trestleService.getProperty(req.params.id, req.body).then(function(openhouse){
        res.json(openhouse);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/', (req, res) => {
    res.send("trestle-service");
});

app.listen(PORT, HOST);