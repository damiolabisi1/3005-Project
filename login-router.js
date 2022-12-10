const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();
const config = require('./config.js');

app.use(express.json()); // body-parser middleware

// router.get('/', (req,res)=> {
//     res.format({
// 		'text/html': ()=> {
// 			res.set('Content-Type', 'text/html');
// 			res.sendFile(path.join(__dirname,'public','home.html'),(err) =>{
// 				if(err) res.status(500).send('500 Server error');
// 			});
// 		},
//         'default' : ()=> {
//             res.status(406).send('Not acceptable');
//         }
//     })
// });

router.post(['/'], (request,response) => {
    request = request.toString()
    console.log(request)
    if(request.session.login){
        response.status(201).send("Logged in");
        return;
    }

    let username = request.body.Username;
    let password = request.body.Password;

    config.query('SELECT U_id,U_name,U_password From users Where U_name=\''+username+"\'", (err,res)=>{
        console.log(err,res)
        if(err) throw err;

        if(res){
            console.log(res);
            if(res.rows[1].u_password == password){
                request.session.login = true;
                request.session.username = username;
                request.session.userid = res.rows[1].u_id ;
                console.log(res.rows[1].u_id );
                response.send(res.rows[1].u_id);
                return;
            }
            if(res.rows[1].u_password != password){
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