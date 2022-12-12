const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();
const config = require('./config.js');

app.use(express.json()); // body-parser middleware

router.post('/cart', (request,response) => {
    let user = request.body.u_id
    let id = request.body.books;

    
});

module.exports = router;