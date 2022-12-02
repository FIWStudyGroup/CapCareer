const mysql = require("mysql");
const dbConfig = require("../../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;

// https://freiheit.f4.htw-berlin.de/2020/webtech/backend/#datenbank-im-backend-anbinden
// weiter mit Model erstellen
