const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();

app.use(express.json()); // body-parser middleware

router.get('/home', (req,res)=> {
    res.format({
		'text/html': ()=> {
			res.set('Content-Type', 'text/html');
			res.sendFile(path.join(__dirname,'public','home.html'),(err) =>{
				if(err) res.status(500).send('500 Server error');
			});
		},
        'default' : ()=> {
            res.status(406).send('Not acceptable');
        }
    })
});