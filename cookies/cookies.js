//

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/set-cookie', (req, res) => {
    res.cookie('name', 'srujana', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set!');
});
app.get('/get-cookie', (req, res) => {
    const cookies = req.cookies;
    res.send(cookies);
});
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('Cookie has been cleared!');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
