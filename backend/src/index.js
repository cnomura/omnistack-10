const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

mongoose.connect('mongodb+srv://cnomura:n0mur4@cluster0-gsuyo.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const server = http.Server(app);

const routes = require('./routes.js');
const { setupWebsocket } = require('./websocket.js');

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);