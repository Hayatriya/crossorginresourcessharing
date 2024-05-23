const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Sample users data with additional details
const users = [
    { username: 'admin', password: 'admin', email: 'user1@example.com', mobile: '6379922686', address: '123 Main St', apiKey: '12345' },
    { username: 'user2', password: 'pass2', email: 'user2@example.com', mobile: '9865868360', address: '456 Elm St', apiKey: '976834657' },
    { username: 'user3', password: 'pass3', email: 'user3@example.com', mobile: '9715956554', address: '789 Oak St', apiKey: '07594345' },
    { username: 'user4', password: 'pass4', email: 'user4@example.com', mobile: '9999999999', address: '101 Pine St', apiKey: '7555868' },
    { username: 'attacker', password: 'attacker', email: 'user5@example.com', mobile: '5555555555', address: '202 Maple St', apiKey: '32365757' }
];

app.use(express.json());

// CORS configuration
app.use((req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin); // Allow the request's origin
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
    next();
});

// Endpoint to get user details
app.post('/users', (req, res) => {
    const { username } = req.body;

    if (username) {
        const user = users.find(u => u.username === username);
        if (user) {
            return res.json(user);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } else {
        return res.json(users);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
