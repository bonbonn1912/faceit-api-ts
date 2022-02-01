import server from '../app'
import { Server } from 'socket.io';

const io = new Server(server);

io.on('connection', (socket) => {
    console.log("connected");
});