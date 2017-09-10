var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var cors = require("cors");
const http = require('http');
const WebSocket = require('ws');

var app = express();

// Configuration
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


const server = http.createServer(app);

// ROUTING
app.use("/", require("./src/app-route"));
require("./src/ws-route")(server);


// SERVER INIT
server.listen(3010, function() {
    console.log("Server Started...");
});