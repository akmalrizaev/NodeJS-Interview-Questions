// Establishing a web socket connection between the client & socket.io server
const socket = io();
socket.on('connect', () => {
  console.log('Socket Client: ', socket.id);
});

socket.on('welcome', (onlineUsers) => {
  console.log('Welcome to the server');
  console.log('Users online: ', onlineUsers);
});

socket.on('userConnected', (user) => {
  console.log(user, ' is now online');
});
