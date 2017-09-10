var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var cors = require("cors");
const WebSocket = require('ws');


var app = express();

// Configuration
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


// app.use(cors());
app.use("/", require("./src/app-route"));
require("./src/ws-route")(app);


app.listen(3010, function() {
    console.log("Server Started...");
});