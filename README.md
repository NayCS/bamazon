# bamazon

Bamazon is a node.js application the simulates the purchase process of a basic e-commerce transaction.


This application has a MySQL Database called bamazon and a table inside the database called "products".

The products table has the following columns:

* item_id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)


Image of data table: 

![Image of data table](https://github.com/NayCS/bamazon/blob/master/images/Step%201%20-%20Intial%20Products%20Table.png)


The app then prompt users with two messages.

* The first should ask them the ID of the product they would like to buy.
* The second message should ask how many units of the product they would like to buy.

![Image selection prompt ](https://github.com/NayCS/bamazon/blob/master/images/Step%202%20-%20Item%20and%20quantity%20selection.png)

At the image referenced above, the user selected to buy 5 Curtains (Product ID = 9). 
