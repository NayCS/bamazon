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

Since the user bought 5 curtains, the stock quantity of the product decreased from the initial 78 (units) to 73 (units). This change in stock is being displayed in the data table "products" (see below):

![Stock Decrease v1](https://github.com/NayCS/bamazon/blob/master/images/Step%203%20-%20Product%20Quantity%20Decrease%20after%20purchase.png)

![Stock Decrease v2](https://github.com/NayCS/bamazon/blob/master/images/Step%203%20-%20V2%20-%20Product%20Quantity%20Decrease%20after%20Purchase.png)

There are times when there is not going to be sufficient stock to process the transaction. When there is not sufficient stock of a specific product, the user will be notified with a "Insufficient quantity!".

At the image below, the user attempted to buy Product ID = 2 (Apples), but there was not stock of this item, therefore the user got the message "Insufficient Quantity!" to let her/him know he could not proceed with the transaction:

![Insufficient Quantity](https://github.com/NayCS/bamazon/blob/master/images/Step%204%20-%20Insufficient%20Qty%20message%20when%20product%20not%20in%20stock.png)
