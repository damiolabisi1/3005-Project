const config = require('./config.js');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;
let router = express.Router();
const loginRouter = require("./login-router.js");
const searchRouter = require("./search-router.js");
const signupRouter = require("./signup-router.js");

let db;
app.locals.db = db;
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
app.use("/login", libraryRouter);
app.use("/search",searchRouter);
app.post("/signup", signupRouter);


config.connect((err)=>{
    if (err){
        console.log(err.message);
        return;
    }
    console.log("Database connected")
})
var username = 'owner'
// config.query('SELE", (err,res)=>{
//     console.log(err,res)

// })

app.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`)
    });

process.on('SIGINT', function() {
    config.end(function () {
      console.log('Database disconnected through app termination');
      process.exit(0);
    });
  });