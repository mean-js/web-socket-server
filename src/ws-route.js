var moment = require("moment");
const http = require('http');
const WebSocket = require('ws');

function WsRoute(app) {
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });


    app.get("/ws", function(req, res, next) {
        var resobj = { "title": "Affixus WS", "ts": moment().toDate() };
        res.json(resobj);
    });


    wss.on('connection', function connection(ws, req) {
        const location = url.parse(req.url, true);
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });

        ws.send('something');
    });


};

module.exports = WsRoute;