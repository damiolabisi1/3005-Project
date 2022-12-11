const express = require('express');
const config = require('./config.js');
const fs = require('fs');
const path = require('path');
const { send } = require('express/lib/response.js');
const app = express();
let router = express.Router();

app.use(express.json()); // body-parser middleware

router.post(['/'], (request,response) => {
    let username = request.body.username;
    let password = request.body.password;
    let confirmp = request.body.confirm_password
    let user_address = request.body.address;
    let user_billing_address = request.billing_address;

    if(username == ""){
        response.status(401).send("Not valid user");
    }
    else if(request.body.password == ""){
        response.status(401).send("Not valid");
    }
    else if(password != confirmp){
        response.status(401).send("Wrong password");
    }
    
    else{
        config.query('SELECT U_id,U_name,U_password From users Where U_name=\''+username+"\'", (err,res)=>{
            console.log(err,res)
            if(err) throw err;

            else if(res.rows.length == 0){      
                let b;
                let a;
                config.query("SELECT A_ID FROM address WHERE address=\'"+user_billing_address+"\'", (e,resulter)=>{
                    b=resulter.row[0].a_id;
                    if(err) throw err;
                    else if(resulter.rows.length == 0){
                        config.query("INSERT INTO address(address) VALUES (\'"+user_billing_address+"\')", (error_b,create_b)=>{
                            
                            
                        });

                        config.query("SELECT A_ID FROM address WHERE address=\'"+user_billing_address+"\'", (error_id,res_id)=>{
                            if(error_id) throw error_id;
                            b=res_id.row[0].a_id;
                        });
                            

                    }
                         
                    else{
                        console.log("401")
                        response.status(401).send("Username taken");
                        return;
                     }
        
                })

                config.query("SELECT A_ID FROM address WHERE address=\'"+user_address+"\'", (e,resulter)=>{
                    a=resulter.row[0].a_id;
                    if(err) throw err;
                    else if(resulter.rows.length == 0){
                        config.query("INSERT INTO address(address) VALUES (\'"+user_address+"\')", (error_b,create_b)=>{
                            
                            
                        });

                        config.query("SELECT A_ID FROM address WHERE address=\'"+user_address+"\'", (error_id,res_id)=>{
                            if(error_id) throw error_id;
                            a=res_id.row[0].a_id;
                        });
                            

                    }
                         
                    else{
                        console.log("401")
                        response.status(401).send("Username taken");
                        return;
                     }
        
                })



                config.query("INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege) VALUES (\'"+user_name+"\',\'"+b+"\',\'"+a+"\',\'"+user_password+"\',FALSE)", (err,res)=>{
                    if(error_b) throw error_b;
                    console.log("200")
                    response.status(200).send();
                });
            }

});

}

});

module.exports = router;
