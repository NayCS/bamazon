// dependency for inquirer npm package
const inquirer = require("inquirer");
// class used to create user objects
class Programmer {
    constructor(userName, password, ) {
        this.userName = userName;
        this.password = password;
    }
    // creates the printInfo method and applies it to all user objects
    printInfo() {
        console.log(`
   Name: ${this.userName}
   Position: ${this.password}
   `);
    };
}
// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.

inquirer.prompt([
    {
        name: "action",
        message: "Would you like to post or bid"
    }
]).then(function (answers) {
    // initializes the variable newProgrammer to be a programmer object which will take
    // in all of the user's answers to the questions above
    if (answers.name === "bid") {
        var mysql = require("mysql");

        if (answers.name === "post")
            var mysql = require("mysql")


        var connection = mysql.createConnection({
            host: "localhost",
            // Your port; if not 3306
            port: 3306,
            // Your username
            user: "root",
            // Your password
            password: "",
            database: "greatBayDB"
        });
    }
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    function readProducts() {
        console.log("Selecting all products...\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end();
        });
    }
});




/////////////////////////////////////////////////////////////////////////////


var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "2579",
    database: "bamazonDB"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
});
function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO products SET ?",
        {
            item: "Rocky Road",
            price: 3.0,
            quantity: 50
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            updateProduct();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
}
function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                quantity: 100
            },
            {
                flavor: "Rocky Road"
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteProduct();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
}
function deleteProduct() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
        "DELETE FROM products WHERE ?",
        {
            flavor: "strawberry"
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products deleted!\n");
            // Call readProducts AFTER the DELETE completes
            readProducts();
        }
    );
}
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}