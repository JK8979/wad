const { io } = require('socket.io-client');
const readline = require('readline');

const socket = io('http://localhost:3000');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on('connect', () => {
  console.log('Connected to server');

  // Read user input and send to server
  rl.on('line', (input) => {
    socket.emit('message', input);
  });
});

socket.on('message', (msg) => {
  console.log(msg);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
