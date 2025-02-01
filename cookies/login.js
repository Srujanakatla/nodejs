const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));  
app.use(cookieParser());  
app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// Handle login logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password123') {
        res.cookie('isLoggedIn', 'true', { maxAge: 3600, httpOnly: true });  
        return res.redirect('/products');
    }

    res.send('Invalid credentials, <a href="/login">try again</a>');
});

app.get('/products', (req, res) => {
    if (req.cookies.isLoggedIn === 'true') {
        res.send(`
            <h1>Welcome to the Products Page</h1>
            <p>Here are the available products...</p>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.redirect('/login');
    }
});

// Logout - clear the cookie
app.get('/logout', (req, res) => {
    res.clearCookie('isLoggedIn');
    res.redirect('/login');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
