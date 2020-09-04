// Set up variables.
global.tool = require("../extend-node").load();
const app = require("express")(),
	server = require("https").createServer(app);

// Set up "Express" server static.
app.use(require("express").static(tool.string.pathFix(`${__dirname}/web`)));

// Run "Express" and "Socket.IO" server.
require("./server/index.js")(app, require("socket.io")(server));

// Run "http" server.
server.listen(
	(process.env.port || 3000),
	() => console.log("Run \"http\" server.")
);

require("./parser");