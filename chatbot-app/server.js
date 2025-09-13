const WebSocket = require('ws');
const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket server running at ws://localhost:${PORT}`);
});

const clients = new Map(); // username => WebSocket

wss.on('connection', (ws) => {
  let currentUser = null;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.type === 'register') {
        currentUser = data.username;
        clients.set(currentUser, ws);
        console.log(`${currentUser} registered`);
      } else if (data.type === 'message') {
        const toUser = data.to;
        const targetSocket = clients.get(toUser);
        if (targetSocket) {
          targetSocket.send(JSON.stringify({
            from: currentUser,
            message: data.message,
          }));
        }
      }
    } catch (err) {
      console.error('Invalid message:', message.toString());
    }
  });

  ws.on('close', () => {
    if (currentUser) {
      clients.delete(currentUser);
      console.log(`${currentUser} disconnected`);
    }
  });
});
