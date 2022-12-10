-- Quary for getting a users user name and password
SELECT U_name,U_password
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
    
