#!/usr/bin/env node

const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('message', function incoming(data, flags) {
    console.log(data);
});

ws.on('close', function close() {
    console.log('Disconnected!');
});
