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
    let qua =request.body.quantity
    config.query("SELECT books.number_in_stock FROM books WHERE ISBN=\'"+isbn+"\'", (err,res)=>{
        if(err)throw err;
        if(res.rows[0]>0){
            config.query("UPDATE books SET number_in_stock = number_in_stock - 1 WHERE isbn =\'"+isbn, (e,r)=>{
                if(e)throw e;
                config.query("SELECT * FROM books WHERE ISBN=\'"+isbn+"\'", (er,re)=>{
                    if (er)throw er;
                    config.quary("SELECT * FROM cart WHERE u_id=\`"+userId+"'\ AND b_id=\'"+bookId+"\'", (er,re)=>{
                        if (re.rows.length<=0){
                            config.quary("INSERT INTO cart(U_ID,ISBN,quantity) VALUES (\'"+user+"\',"+isbn+","+qua+")",(errr,ree)=>{
                            if (errr)throw errr;
                        });

                        }
                        else{
                            config.quary("UPDATE cart SET quantity = quantity+1 WHERE isbn =\'"+isbn+"'\ AND b_id=\'"+bookId+"\'",(errr,ree)=>{
                                if (errr)throw errr;
                            });
                        }
                    });
                    response.status(200).send(re.rows[0])
                    return;
                });

            });
        }else{
            response.status(401).send("false");
            return;
        }

    });


    
});

module.exports = router;