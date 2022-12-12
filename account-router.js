const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();
const config = require('./config.js');

app.use(express.json()); // body-parser middleware

router.post('/cart', (request,response) => {
    let user = request.body.user
    let isbn = request.body.id;
    config.query("SELECT books.number_in_stock FROM books WHERE ISBN=\'"+isbn+"\'", (err,res)=>{
        if(err)throw err;
        if(res.rows[0]>0){}

    });


    
});

module.exports = router;