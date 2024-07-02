const express = require('express');
const { Server } = require('socket.io');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

const server = app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Socket connection established: ' + socket.id);
  socket.on('disconnect', () => {
    console.log('Client disconnected: ', socket.id);
  });
});

// Built-in function that raises an event for the entire socket.io server
// Allows us to define - what should happen when certain events occur at the server level.
// Connection event will be triggered when a new client connects to the server
// socket.id holds the unique id which is generated when a new connection is made by the client
