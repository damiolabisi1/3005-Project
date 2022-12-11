const express = require('express');
const config = require('./config.js');
const fs = require('fs');
const path = require('path');
const app = express();
let router = express.Router();

app.use(express.json()); // body-parser middleware

router.post(["/signup"], (request,response) => {
    let username = request.body.username;
    let password = request.body.password;

    if(username == ""){
        response.status(401).send("Not valid user");
    }
    else if(request.body.password == ""){
        response.status(401).send("Not valid");
    }
    
    else{
        config.query('SELECT U_id,U_name,U_password From users Where U_name=\''+username+"\'", (err,res)=>{
            console.log(err,res)
            if(err) throw err;

            if(res.rows.length == 0){
                config.query("INSERT INTO address(address) VALUES (\'"+user_address+"\')", (err,res)=>{
                    if(err) throw err;
                    else{
                        
                    };
                });
                }
            else{
                response.status(401).send("Username taken");
                return;
        }
        
    })
}

});


module.exports = router;