#!/usr/bin/env node

const WebSocket = require('ws');

const wss = new WebSocket.Server({
    perMessageDeflate: false,
    port: 8080
});

const clients = [];

wss.on('connection', function connection(wsc) {
    clients.push(wsc);

    wsc.on('close', function() {
        clients.splice(clients.indexOf(wsc), 1);
    });
});

setInterval(function() {
    var now = new Date();

    for(var i = 0; i < clients.length; i++) {
        clients[i].send(now.toString());
    }
}, 10000);
