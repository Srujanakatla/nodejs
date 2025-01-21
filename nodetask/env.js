const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: '123456', 
    database: 'practice',
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL database.');
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server!');
});
app.get('/test-db', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, results) => {
        if (err) {
            res.status(500).json({ 
                error: true, 
                message: 'Database connection failed.' 
            });
        } else {
            res.setHeader('Content-Type', 'application/json'); 
            res.status(200).json({
                error: false,
                message: "Database connection successful!",
                testResult: results[0].result,
            });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});