// Establishing a web socket connection between the client & socket.io server
const socket = io();
socket.on('connect', () => {
  console.log('Socket Client: ', socket.id);
});
