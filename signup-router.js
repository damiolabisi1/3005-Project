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
    let user_address = request.body.address;
    let user_billing_address = request.billing_address;

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

            else if(res.rows.length == 0){
                config.query("SELECT A_ID FROM address WHERE address=\'"+user_address+"\'", (err,resulter)=>{
                    if(err) throw err;
                    else if(resulter.rows.length == 0){
                            config.query("INSERT INTO address(address) VALUES (\'"+user_address+"\')", (err,result)=>{
                                if(err) throw err;
                            })
                            config.query("INSERT INTO address(address) VALUES (\'"+user_address+"\')", (err,result)=>{
                                if(err) throw err;
                            })
                            config.query("INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege) VALUES (\'"+username+"\',(SELECT a_id FROM address WHERE address=\'"+user_billing_address+"\'),(SELECT a_id FROM address WHERE address=\'"+user_address+"\'),\'"+user_password+"\',FALSE)", (err,res)=>{
                                if(err) throw err;
                                console.log(res)
                            });
                        }
                    else{
                        config.query("INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege) VALUES (\'"+username+"\',\'"+user_billing_address+"\',\'"+resulter.row[1].address_id+"\',\'"+password+"\',FALSE)", (err,res)=>{
                            if(err) throw err;
                        });
                    }
                        
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