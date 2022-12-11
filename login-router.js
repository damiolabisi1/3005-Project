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

router.post('/', (request,response) => {
    console.log(request.body)

    let username = request.body.Username;
    let password = request.body.Password;

    config.query('SELECT U_id,U_name,U_password From users Where U_name=\''+username+"\'", (err,res)=>{
        console.log(err,res)
        if(err) throw err;

        if(res.rows.length != 0){
            config.query("SELECT * FROM books ", (error,result)=>{
                if (error)throw error;
                let books = result.rows;
                books.u_id =res.rows[0].u_id.toString();
                JSON.stringify(books);
                response.status(200).send(books);
                return;});
            
            if(res.rows[0].u_password != password){
                response.status(401).send("Invalid password");
            }
        }
        else{
            response.status(401).send("Invalid username");
            return;
        }
    });

});

router.post('/admin', (request,response) => {
    console.log(request.body)

    let username = request.body.Username;
    let password = request.body.Password;

    config.query('SELECT U_id,U_name,U_password,admin_privileges From users Where U_name=\''+username+"\'", (err,res)=>{
        console.log(err,res)
        if(err) throw err;

        if(res.rows.length != 0){
            console.log(res);
            if(res.rows[0].u_password == password && admin_privileges == 'true'){
                config.query("SELECT * FROM books ", (error,result)=>{
                    if (error)throw error;
                    let books = JSON.stringify(res.rows);
                    let u_id = res.rows[0].u_id.toString();


                    response.send(u_id,books);
                });
                return;
            }
            if(res.rows[0].u_password != password){
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