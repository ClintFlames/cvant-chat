module.exports = (io) => {
	console.log("Run \"Socket.IO\" server.");
	const parse = (message) => ({
		author: message.author.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;").substring(0, 500),
		content: message.content.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;").substring(0, 2500)
	});
	io.on("connection", (socket) => {
		switch (socket.handshake.query.level) {
		case "anarchy":
			socket.on("client-message", (message) => {
				message = parse(message);
				if (message.author && message.content) {
					io.emit("anarchy-message", {
						author: message.author,
						content: message.content
					});
				}
			});
			break;
		default:
			socket.disconnect();
		}
	});
};