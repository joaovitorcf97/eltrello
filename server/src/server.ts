import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get('/', (req, res) => {
  res.send('API is Up');
});

io.on('connection', () => {
  console.log('Connect');
});

mongoose.connect('mongodb://localhost:27017/eltrello').then(() => {
  console.log('connect to mogodb');

  httpServer.listen(4001, () => {
    console.log('API is listening on port 4001');
  });
});
