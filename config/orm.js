var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += "VALUES (";
        queryString += " ? ";
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(table, vals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += "SET ";
        queryString += vals;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });

    }
};

// Export the ORM object in module.exports.
module.exports = orm;