-- Quary for getting a users user name and password
SELECT U_name,U_password
FROM users
WHERE U_name='owner' AND u_password='admin'

--Signup: adds a user and their info to the data base
    --users addresses
    INSERT INTO address(address)
VALUES
	('The stores address');
    --users info
    INSERT INTO users(U_name,billing_address,address,U_password,Admin_privilege)
    VALUES ((SELECT count(u_id)
            FROM users
            ),'mozaiha',2,2,'mo',FALSE);
