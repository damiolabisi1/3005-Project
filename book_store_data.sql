INSERT INTO address(address)
VALUES
	('The stores address'),
	('The owners house'),
	('edis house'),
	('bobs house'),
	('fire headquarters'),
	('carleton university'),
	('big pick headquarters'),
	('bobs house');

INSERT INTO Users(U_name,billing_address,address,U_password,Admin_privilege)
VALUES
	('owner',2,2,'admin',TRUE),
	('edi',3,3,'12345',FALSE),
	('bob',4,4,'54321',FALSE);
	
INSERT INTO publishers(P_name,address,email_address,bank_account)
VALUES
	('Fire publishing',4,'fire@gmail.com',0000),
	('Carleton Bird publishing',5,'carletonbird@gmail.com',0001),
	('Big Pick publishing',6,'bigpick@gmail.com',0002),
	('Apple inc',7,'applelovesmonery@apple.com',0003);
	
	
INSERT INTO books(B_name,Author,publisher_number,number_of_pages,price,number_in_stock,publisher_sale_percentage,date_published)
VALUES
	('Harry Potter: The light of the moon','Harry Potter',1,50,59,23,3,'2020-01-01'),
	('Vampire hunters','Pete Johnson',1,41,20,3,1,'2012-12-03'),
	('The life of the Apple guru','Jack Black',4,5,799,19,99,'2017-11-06');
	
INSERT INTO orders(shipping_address,billing_address)
VALUES
	(2,3),
	(8,6),
	(8,6);
	

INSERT INTO phone_numbers(phone_numbers,publisher_number)
VALUES
	(55555,1),
	(22222,2),
	(44444,3),
	(33333,4),
	(66666,3),
	(77777,4),
	(88888,4),
	(11111,2);

INSERT INTO Genre(G_name)
VALUES
	('fantacy'),
	('money'),
	('thriller'),
	('adventure');
	
INSERT INTO Book_genre(G_ID,ISBN)
VALUES
	(1,1),
	(3,1),
	(1,2),
	(3,2),
	(4,1),
	(2,3);
	
INSERT INTO books_in_order(ISBN,order_number,quantity)
VALUES
	(1,3,2),
	(2,2,11),
	(3,1,3),
	(2,3,1);


INSERT INTO cart(U_ID,ISBN,quantity)
VALUES
	(2,3,14),
	(3,1,1),
	(3,2,1),
	(3,3,3);
	







