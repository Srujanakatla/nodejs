const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));  // To parse form data
app.use(cookieParser());  // To parse cookies

// Serve the login form
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

    // For simplicity, using a hardcoded username/password
    if (username === 'admin' && password === 'password123') {
        // Set a cookie to remember the login
        res.cookie('isLoggedIn', 'true', { maxAge: 3600, httpOnly: true });  
        return res.redirect('/products');
    }

    // If login fails, redirect back to login page
    res.send('Invalid credentials, <a href="/login">try again</a>');
});

// Products page, accessible only if logged in
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
