function login(){
    let Username = document.getElementById("Username").value;
	let Password = document.getElementById("Password").value;

    const Body = {Username,Password}
	let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            alert("Succesfully Logged-In.\n Redirecting to home page.\n");
            let data = JSON.parse(this.responseText);
            // window.location = "/login";
            let show = document.getElementById("login");
            show.classList.remove("show");
            show.classList.add("hidden");
            let hid = document.getElementById("search");
            hid.classList.remove("hidden");
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
    let confirm_password = document.getElementById("cpassword").value;
    let address = document.getElementById("address").value;
    let billing_address = document.getElementById("baddress").value;
    
	const Body = {username,password, confirm_password, address, billing_address}
	
	let req = new XMLHttpRequest();
	
	req.onreadystatechange = function () {
	if (this.readyState==4 && this.status==200) {
        alert("Succesfully Registered. Please Login\n");
        let data = JSON.parse(this.responseText);
		window.location = "/login.html";

        // console.log(password);
        // if(password != confirm_password){
        //     alert("Passwords don't match");
        // }
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
	req.open("POST", "/signup", true);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(Body));
}

function search(){
    let search = document.getElementById("search").value;
    let searchtypeb= document.querySelector('input[name="radio"]:checked').id;

    const Body = {search,searchtypeb}
	let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            let data = JSON.parse(this.responseText);
            let list = document.getElementById("result");
            // list.innerHTML = ""
            for(let i = 0; i < data.length; i++){
                list.appendChild(ul); 
            }
        }
        else if(this.readyState==4 && this.status==401) {
            if (this.responseText == ""){
                document.getElementById("list").innerHTML = "Not found";
            }
        }

    };
        req.open("POST", "/login", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(Body));
}

