//
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'practice',
});

connection.query(`SELECT * FROM emp`, (err, results, fields) => {
    if (err) {
        console.error("Error executing query:", err.message);
    } else {
        console.log("Connected to MySQL database!", results);
    }})