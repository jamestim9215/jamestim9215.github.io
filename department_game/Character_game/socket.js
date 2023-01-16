
import { io } from "socket.io-client";

let socket = io(
    'ws://127.0.0.1:5001',
    // 'ws://10.8.22.37:5001',
    {
        reconnection: true,
    }
);

export { 
    socket
} 
