const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

let users = [{ id: 1, name: "srujana" }];
app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
    let newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.patch('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
