config.query('SELECT U_id,U_name,U_password From users Where U_name=\''+username+"\'", (err,res)=>{});

//Quary for getting a users user name and password
config.query("SELECT U_id,U_name,U_password FROM users WHERE U_name=\'"+username+"\'", (err,res)=>{});

//Signup: adds a user and their info to the data base
    //gets aid of the user
    config.query("SELECT A_ID FROM address WHERE address=\'"+user_address+"\'", (err,res)=>{});

    //if user address already exists

        //inserts the user info
        config.query("INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege) VALUES (\'"+user_name+"\',\'"+address_id+"\',\'"+address_id+"\',\'"+user_password+"\',FALSE)", (err,res)=>{});

    //if user address doesnt exist
        //users addresses
        config.query("INSERT INTO address(address) VALUES (\'"+user_address+"\')", (err,res)=>{});

        //users info
        config.query("INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege) VALUES (\'"+username+\"',(SELECT a_id FROM address WHERE address=\'"+users_billing_address+"\'),(SELECT a_id FROM address WHERE address=\'"+user_address+"\'),\'"+user_password+"\',FALSE)", (err,res)=>{});

        //sudo code for user registrtaton
            //gets aid of the user billing address query

            //if (billing address aid is empty) {
                //create an address
                //get the addresses aid
            //}

            //gets aid of the user address query

            //if (address aid is empty) {
                //create an address
                //get the addresses aid
            //}

            //create the user
    
//Searching for books
    //by ISBN
    config.query("SELECT * FROM books WHERE ISBN="+search_text, (err,res)=>{});

    //by author
    config.query("SELECT * FROM books WHERE author=\'"+search_text+"\'", (err,res)=>{});

    //by name
    config.query("SELECT * FROM books WHERE B_name=\'"+search_text+"\'", (err,res)=>{});

    //by genre
    config.query("SELECT books.ISBN,books.B_name,books.author,books.publisher_number,books.number_of_pages,books.price,books.number_in_stock,books.publisher_sale_percentage,books.date_published FROM genre NATURAL JOIN book_genre NATURAL JOIN books WHERE G_name = \'"+search_text+"\'", (err,res)=>{});

//Getting the content of a users cart
config.query("SELECT books.ISBN,books.B_name,books.author,books.publisher_number,books.number_of_pages,books.price,books.number_in_stock,books.publisher_sale_percentage,books.date_published FROM users NATURAL JOIN cart NATURAL JOIN books WHERE users.U_ID=\'"+user_id+"\'", (err,res)=>{});

//Getting the orders a user has made
    //getting order infor
    config.query("SELECT order_number,tracking_number,shipping_address FROM orders WHERE U_ID=\'"+user_id+"\'", (err,res)=>{});

    //getting the books that have been ordered and their quanity
    config.query(" SELECT books.b_name,books_in_order.quantity FROM orders NATURAL JOIN books_in_order NATURAL JOIN books WHERE U_ID=\'"+user_id+"\'", (err,res)=>{});

--all tables
SELECT *
FROM users;

SELECT *
FROM publishers;

SELECT *
FROM orders;

SELECT *
FROM books;

SELECT *
FROM phone_numbers;

SELECT *
FROM cart;

SELECT *
FROM books_in_order;

SELECT *
FROM address;

SELECT *
FROM genre;

SELECT *
FROM book_genre;





