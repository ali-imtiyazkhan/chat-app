import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
});

// userId -> socketId
const userSocketMap = {};

export const getReciverSocketId = (reciverId) => {
  return userSocketMap[reciverId];
};

const getOnlineUsers = () => Object.keys(userSocketMap);

io.on('connection', (socket) => {
  console.log('🔌 User connected:', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId && userId !== "undefined") {
    userSocketMap[userId] = socket.id;
    console.log(`✅ Mapped userId ${userId} to socket ${socket.id}`);
  }

  io.emit('get-online-users', getOnlineUsers());

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
    for (const [uid, sid] of Object.entries(userSocketMap)) {
      if (sid === socket.id) {
        delete userSocketMap[uid];
        break;
      }
    }
    io.emit('get-online-users', getOnlineUsers());
  });
});

export { app, io, server };
