const { Server } = require('socket.io');
const http = require('http');
const readline = require('readline');

const server = http.createServer();
const io = new Server(server);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Listen for messages from client
  socket.on('message', (msg) => {
    console.log('Client:', msg);
  });

  // Send server input to client
  rl.on('line', (input) => {
    socket.emit('message', 'Server: ' + input);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
