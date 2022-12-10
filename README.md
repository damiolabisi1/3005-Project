# 3005-Project

run:
    npm install express
    npm install nodejs
    npm install pg
    npm install path


app.get(["/","/home"], (request,response) => {
	response.statusCode = 200;
	response.setHeader("Content-Type", "text/html");
	response.render("home")
});
