var express = require("express");
var router = express.Router();
var moment = require("moment");


router.get("/", function(req, res, next) {
    var resobj = { "title": "Affixus", "ts": moment().toDate() };
    res.json(resobj);
});


module.exports = router;