// Implementierung der Verbindung zur DB
const mysql = require("mysql");
const dbConfig = require("../../config/db.config.js"); // erzeugen einer Instanz, die die Attribute aus der angegebenen Datei übernimmt

// Create a connection to the database
const connection = mysql.createConnection({
    // connection werden die Werte zu den Attributen von dbConfig übergeben
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


