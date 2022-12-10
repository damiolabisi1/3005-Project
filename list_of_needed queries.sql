-- Quary for getting a users user name and password
SELECT U_id,U_name,U_password
FROM users
WHERE U_name='owner'

--Signup: adds a user and their info to the data base
    --users addresses
    INSERT INTO address(address)
    VALUES
	('mozaihas house');
    --users info
    INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege)
    VALUES ('mozaiha',(SELECT a_id
            	FROM address
				WHERE address='mozaihas billing address'  
            ),(SELECT a_id
            	FROM address
				WHERE address='mozaihas shipping address'  
            ),'mo',FALSE);
    
--Searching for books
    --by ISBN
    SELECT *
    FROM books
    WHERE ISBN=1
    --by author
    SELECT *
    FROM books
    WHERE author='Jack Black'
    --by name
    SELECT *
    FROM books
    WHERE B_name='The life of the Apple guru'
    --by genre
    SELECT books.ISBN,books.B_name,books.author,books.publisher_number,books.number_of_pages,books.price,books.number_in_stock,books.publisher_sale_percentage,books.date_published
    FROM genre
    NATURAL JOIN book_genre
    NATURAL JOIN books
    WHERE G_name = 'fantacy';

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




