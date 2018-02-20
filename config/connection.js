var mysql = require("mysql");

var connection = myql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;