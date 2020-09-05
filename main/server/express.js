module.exports = (app) => {
	console.log("Run \"Express\" server.");
	app.get("/", (req, res) => {
		res.redirect("./chat");
	});
	app.get("/chat", (req, res) => {
		res.sendFile(tool.string.pathFix(`${__dirname.substring(0, __dirname.length - 7)}/index.html`));
	});
};