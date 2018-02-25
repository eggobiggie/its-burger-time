var mysql = require("mysql");

//Connection for local SQL database
// var connection = mysql.createConnection({
//     port: 8889,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "burger_db"
// });

//Connection for Heroku/SQL Database
var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "db_name",
    });
};

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;