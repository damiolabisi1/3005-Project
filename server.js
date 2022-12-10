const config = require('./config.js');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

const libraryRouter = require("./library-router.js");
const searchRouter = require("./search-router.js");
const signupRouter = require("./signup-router.js");

let db;
app.locals.db = db;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req,_,next)=> {
    console.log(`${req.method}: ${req.url}`);
    if (Object.keys(req.body).length > 0){
        console.log('Body:');
        console.log(req.body);
    }
    next();
});

//Mount the fridge router to the path /fridges
//All requests starting with /fridges will be forwarded to this router
app.use("/home", libraryRouter);
app.use("/search",searchRouter);
app.post("/signup", signupRouter);


config.connect((err)=>{
    if (err){
        console.log(err.message);
        return;
    }
    console.log("Database connected")
})

config.query('SELECT * from Books', (err,res)=>{
    console.log(err,res)

})

app.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`)
    });

process.on('SIGINT', function() {
    config.end(function () {
      console.log('Database disconnected through app termination');
      process.exit(0);
    });
  });