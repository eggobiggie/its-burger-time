var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table + " SET devoured=true WHERE " + condition;

        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    deleteOne: function(table, condition, callback) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
      }
};

// Export the ORM object in module.exports.
module.exports = orm;