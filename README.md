# 3005-Project

run:
    npm install express
    npm install nodejs
    npm install pg
    npm install path


app.post(["/signup"], (request,response) => {
    let username = request.body.username;
    let password = request.body.password;
    let privacy = false;

    if(request.body.username == ""){
        response.status(401).send("Not valid user");
    }
    else if(request.body.password == ""){
        response.status(401).send("Not valid");
    }
    
    else{
        db.collection("users").findOne({username : username},function(err, data){  
            if(err) throw err;

            if(data == null){
                db.collection("users").insertOne({username : username, password :password, privacy: privacy})
                    db.collection("users").findOne({username : username},function(err, result){  
                        if(err) throw err;

                        request.session.login = true;
                        request.session.username = username;
                        request.session.userid = result._id;
                        response.status(200).send(result._id);
                    })
                }
            else{
                response.status(401).send("Username taken");
                return;
        }
        
    })
}

});    

