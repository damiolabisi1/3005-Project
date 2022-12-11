function login(){
    let Username = document.getElementById("Username").value;
	let Password = document.getElementById("Password").value;

    const Body = {Username,Password}
	let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            alert("Succesfully Logged-In.\n Redirecting to home page.\n");
            let data = JSON.parse(this.responseText);
                window.location = "/search.html";
        }
        else if(this.readyState==4 && this.status==401) {
            if (this.responseText == "Invalid password"){
                document.getElementById("Err").innerHTML = "Incorrect Password";
            }
            else{
                document.getElementById("Err").innerHTML = "";
            }
            if (this.responseText == "Invalid username"){
            document.getElementById("UserErr").innerHTML = "Incorrect Username";
            }
            else{
                document.getElementById("UserErr").innerHTML = "";
            }

            if (this.responseText == "Invalid credentials" && "Invalid credentials pass"){
                document.getElementById("Err").innerHTML = "Incorrect Password";
                document.getElementById("UserErr").innerHTML = "Incorrect Username";
            }
            
        }
        };
        req.open("POST", "/login", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(Body));
    }

//Handles the register button
function register(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
    
	const Body = {username,password}
	
	let req = new XMLHttpRequest();
	
	req.onreadystatechange = function () {
	if (this.readyState==4 && this.status==200) {
        let id = JSON.parse(this.responseText);
		alert("Succesfully Registered.\n");
			window.location = "/users/"+id;
	}
	else if(this.readyState==4 && this.status==401) {
        if (this.responseText == "Username taken"){
            alert("Username taken");
        }
        else if(this.responseText == "Not valid user"){
            alert("Enter a valid username");
        }
        else if(this.responseText == "Not valid"){
            alert("Enter a valid password");
        }
    }
    };
	req.open("POST", "/register", true);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(Body));
}
