const {Client} = require('pg');
const connectionString = 'postgressql://postgres:finalproject.crhco7daqzun.ca-central-1.rds.amazonaws.com:5432/finalproject';
const client = new Client({
    host: "finalproject.crhco7daqzun.ca-central-1.rds.amazonaws.com",
    port: "5432",
    user: "postgres",
    password: "comp3005",
    database: "postgres",

});

module.exports = client;

// client.connect((err)=>{
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log("Database connected")
// })

// client.query('SELECT * from Books', (err,res)=>{
//     console.log(err,res)
//     client.end()
// })
