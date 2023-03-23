var Express = require("express");
var router = Express.Router();

router.get("/", function (req, res, next) {
	res.send("API is working properly");
});

module.exports = router;
