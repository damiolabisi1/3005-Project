const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();
const config = require('./config.js');

app.use(express.json()); // body-parser middleware

router.get('/', (req,res)=> {
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

router.post(["/login"], (request,response) => {
    if(request.session.login){
        response.status(201).send("Logged in");
        return;
    }

    let username = request.body.Username;
    let password = request.body.Password;

    config.query('SELECT * from Books', (err,res)=>{
        console.log(err,res)
        if(err) throw err;

        if(res){
            if(data.password == password){
                request.session.login = true;
                request.session.username = data.username;
                request.session.userid = data._id;
                response.send(data._id);
                return;
            }
            if(data.password != password){
                response.status(401).send("Invalid password");
            }
        }
        else{
            response.status(401).send("Invalid username");
            return;
        }
    });

});

module.exports = router;