const config = require('./config.js');



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


process.on('SIGINT', function() {
    config.end(function () {
      console.log('Database disconnected through app termination');
      process.exit(0);
    });
  });