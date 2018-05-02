require("dotenv").config();
var mysql = require("mysql");
var db = require("../config/db_conn");

// Setup connection
var connection = mysql.createConnection(db);

// Establish MySQL Connection
connection.connect(function(err){
	if (err){
		console.error("Error connecting: " + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;