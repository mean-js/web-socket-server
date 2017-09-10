var moment = require("moment");

function WsRoute(app) {

    app.get("/ws", function(req, res, next) {
        var resobj = { "title": "Affixus WS", "ts": moment().toDate() };
        res.json(resobj);
    })

};

module.exports = WsRoute;