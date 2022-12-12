const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();
const config = require('./config.js');

app.use(express.json()); // body-parser middleware

router.post('/cart', (request,response) => {
    let u_id = request.body.u_id
    let books = request.body.books;
    
    
});

module.exports = router;