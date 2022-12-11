const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();
const config = require('./config.js');

app.use(express.json()); // body-parser middleware
router.post('/', (request,response) => {
    let text = request.body.text;
    let type = request.body.type.toLowerCase();
        //by ISBN
        if(type == isbn )
        config.query("SELECT * FROM books WHERE ISBN="+search_text, (err,res)=>{
            if (err) throw err;
            if(res.rows.length > 0){
                response.send(JSON.stringify(res.rows));
                return;
            }
        });

        //by author
        else if(type == author )
        config.query("SELECT * FROM books WHERE author=\'"+search_text+"\'", (err,res)=>{
            if (err) throw err;
            if(res.rows.length > 0){
                response.send(JSON.stringify(res.rows));
                return;
            }
        });
    
        else if(type == name )
        config.query("SELECT * FROM books WHERE B_name=\'"+search_text+"\'", (err,res)=>{
            if (err) throw err;
            if(res.rows.length > 0){
                response.send(JSON.stringify(res.rows));
                return;
            }
        });
    
        else if(type == gnere )
        config.query("SELECT books.ISBN,books.B_name,books.author,books.publisher_number,books.number_of_pages,books.price,books.number_in_stock,books.publisher_sale_percentage,books.date_published FROM genre NATURAL JOIN book_genre NATURAL JOIN books WHERE G_name = \'"+search_text+"\'", (err,res)=>{
            if (err) throw err;
            if(res.rows.length > 0){
                response.send(JSON.stringify(res.rows));
                return;
            }
        });

});


module.exports = router;