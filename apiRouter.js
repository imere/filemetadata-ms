const apiRouter = require("express").Router();
const mt = require("multer");

module.exports = apiRouter;

apiRouter.post("/fileanalyse", mt().any(), (req, res, next) => {
	let files = req.files;
	if(!files){
		return res.status(400).send();
	}else{
		let info = [];
		req.files.forEach((v, i, arr) => {
			info.push(v);
		});
		res.send(JSON.stringify(info));
	}
});
