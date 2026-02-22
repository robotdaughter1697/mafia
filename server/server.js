const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path'); // Standard Node.js tool for paths

// 1. Tell Express to serve files from the 'client' folder
app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
    console.log('A player connected:', socket.id);
});

// 2. Start the server on port 3000
const PORT = 3000;
http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
