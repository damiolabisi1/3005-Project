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
            let list = document.getElementById("result");
            // list.innerHTML = ";
            // for(let i = 0;i<data.length;i++){
                // // list.innerHTML += '<p> ISBN: +data[i].isbn +<p> Name: +data[i].b_name +<p> Author: +data[i].author '+
                // '</p> Publisher No: +data[i].publisher_number +<p> Number of pages: +data[i].number_of_pages +<p> Price: +data[i].price' +
                // '<p> Number in stock: +data[i].number_in_stock +<p> Sale Percentage: +data[i].publisher_sale_percentage +<p> Date Published: +data[i].date_published'
                
                // '</p> <button id="cart" type="button" onclick="">Add to Cart</button>'
            // }
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
    let search = document.getElementById("text").value;
    let type= document.querySelector('input[name="radio"]:checked').id;


    const Body = {search,type}
	let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            let data = JSON.parse(this.responseText);
            let list = document.getElementById("result");
            list.innerHTML = "";
            for(let i = 0;i<data.length;i++){
                list.innerHTML += '<p> ISBN: '+data[i].isbn +'<p> Name: '+data[i].b_name +'<p> Author: '+data[i].author +
                '</p> Publisher No: '+data[i].publisher_number +'<p> Number of pages: '+data[i].number_of_pages +'<p> Price: '+data[i].price +
                '<p> Number in stock: '+data[i].number_in_stock +'<p> Sale Percentage: '+data[i].publisher_sale_percentage +'<p> Date Published: '+data[i].date_published +
                '</p> <button id="cart" type="button" onclick="">Add to Cart</button>'
            }
        }
        else if(this.readyState==4 && this.status==401) {
            if (this.responseText == "Not found"){
                document.getElementById("result").innerHTML = '<p> Not found <p>';
            }
        }

    };
        req.open("POST", "/search", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(Body));
}

function adminlogin(){
    let Username = document.getElementById("Username").value;
	let Password = document.getElementById("Password").value;

    const Body = {Username,Password}
	let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            alert("Succesfully Logged-In.\n Redirecting to admin page.\n");
            let data = JSON.parse(this.responseText);
            window.location = "/admin.html";
            // let show = document.getElementById("login");
            // show.classList.remove("show");
            // show.classList.add("hidden");
            // let hid = document.getElementById("search");
            // hid.classList.remove("hidden");
        }
    
        else if(this.readyState==4 && this.status==401) {
            if (this.responseText == "Invalid password"){
                document.getElementById("Error").innerHTML = "Incorrect Password";
            }
            else{
                document.getElementById("Error").innerHTML = "";
            }
            if (this.responseText == "Invalid username"){
            document.getElementById("AdmimErr").innerHTML = "Incorrect Username";
            }
            else{
                document.getElementById("AdminErr").innerHTML = "";
            }

            if (this.responseText == "Invalid credentials" && "Invalid credentials pass"){
                document.getElementById("Error").innerHTML = "Incorrect Password";
                document.getElementById("AdminErr").innerHTML = "Incorrect Username";
            }
            
        }
        };
        req.open("POST", "login/adminlogin", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(Body));
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

function admin_search(){

    let bookname = document.getElementById("book name").value;
	let author = document.getElementById("book author").value;

    console.log("bookname: "+bookname);
    console.log("author: "+author)
    alert("bookname: "+bookname+" author: "+author)
    const body={bookname,author};

    req.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            let data = JSON.parse(this.responseText);
            alert("tests");
            admin_book_loader(data);
            
        }
    
        else if(this.readyState==4 && this.status==401) {
            
            
        }
        };
        req.open("POST", "/admin", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(Body));
    




}

function admin_book_loader(data){
    document.getElementById("book search").innerHTML="";
    console.log(data)


}

