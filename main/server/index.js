module.exports = (app, io) => {
	require("./express.js")(app);
	require("./socket.io.js")(io);
};