# 3005-Project

run:
    npm install express
    npm install nodejs
    npm install pg
    npm install path
    
app.post(["/login"], (request,response) => {
    if(request.session.login){
        response.status(201).send("Logged in");
        return;
    }

    let username = request.body.Username;
    let password = request.body.Password;

    db.collection("users").findOne({username : username},function(err, data){
        if(err) throw err;

        if(data){
            if(data.password == password){
                request.session.login = true;
                request.session.username = data.username;
                request.session.userid = data._id;
                response.send(data._id);
                return;
            }
            if(data.password != password){
                response.status(401).send("Invalid password");
            }
        }
        else{
            response.status(401).send("Invalid username");
            return;
        }
    });

});
