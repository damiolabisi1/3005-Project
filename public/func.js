function login(){
    let Username = document.getElementById("Username").value;
	let Password = document.getElementById("Password").value;

    const Body = {Username,Password}
	let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            alert("Succesfully Logged-In.\n Redirecting to home page.\n");
            let data = JSON.parse(this.responseText);
            window.location = "/search";
            
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
    alert("sign up");
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("cpassword").value;
    let address = document.getElementById("address").value;
    let billing_address = document.getElementById("baddress").value;
    
	const Body = {username,password, confirmpassword, address, billing_address}
	
	let req = new XMLHttpRequest();
	
	req.onreadystatechange = function () {
	if (this.readyState==4 && this.status==200) {
        alert("Succesfully Registered. Please Login\n");
        let data = JSON.parse(this.responseText);
		window.location = "/login";
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
    alert("hi");
    let search = document.getElementById("search").value;
    let searchtypeb= document.querySelector('input[name="radio"]:checked').id;

    console.log(search);
    console.log(searchtypeb);

    // let req = new XMLHttpRequest();
	// let params = "/?username=" + search;
    // url = "/users"+params
    // req.open("GET", url);
    // req.setRequestHeader("Content-Type", "application/json");
    // req.send();

    // req.onreadystatechange = function () {
    //     if (this.readyState==4 && this.status==200) {
    //         let sea = JSON.parse(this.responseText);
    //         let list = document.getElementById("result");
    //         list.innerHTML = "<h1>Results</h1>";
    //         for (let i = 0; i < sea.length; i++){
    //             let users = sea[i];
    //             if(!users.privacy){
    //                 let seaElement = document.createElement("li");
    //                 let seaData = document.createElement("a");
    //                 seaData.className = "users";
    //                 seaData.innerText = users.username;
    //                 seaData.href = "http://localhost:3000/users/" + users._id;
    //                 seaElement.appendChild(seaData);
    //                 list.appendChild(seaElement);
    //             }
    //             else{
    //                 console.log("no");
    //             }
    //         }
    //     }
        
        // };
}

// function book_generator(){
    
//     //get the json with the book info

//     for(loop through the json books){
//         let option= document.createElement("option");
//         option.textContent = cat;
//         option.id=cat;
//         option.value = cat;
//         document.getElementById("select_div").appendChild(option);

//     }

//     let book= document.createElement("text");
//     book.textContent = book_info_function();//function which takes in the book info and puts it in a printable format
//     book.id=bookname;//
//     document.getElementById("books_in_store").appendChild(book);

//     let option= document.createElement("button");
//     option.textContent = cat;
//     option.id=cat;
//     option.value = cat;
//     document.getElementById("select_div").appendChild(option);

// }

