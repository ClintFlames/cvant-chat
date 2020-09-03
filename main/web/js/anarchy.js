const socket = io("", { query: "level=anarchy" });
document.title = "Anarchy - connected";
document.getElementById("input").addEventListener("keydown", (event) => {
	if (event.key == "Shift") {
		const message = {
			author: document.getElementById("nick").value,
			content: document.getElementById("input").value
		};
		if (!message.author.trim()) {
			message.author = "Anonymous";
		}
		if (message.author.trim().length < 501) {
			if (message.content.trim().length < 2501) {
				socket.emit("client-message", message);
			} else {
				alert(`Message can't have more than 2500 symbols.
You have ${message.content.trim().length} symbols.`);
			}
		} else {
			alert(`Nick can't have more than 500 symbols.
You have ${message.author.trim().length} symbols.`);
		}
	}
});

socket.on("anarchy-message", (message) => {
	document.getElementById("chat").innerHTML =
		`${document.getElementById("chat").innerHTML.substring(0,
			document.getElementById("chat").innerHTML.length - 26)}
		<div align="left">
			<div>${message.author}</div>
			<div>${message.content}</div>
		</div>
		<div id="bottom"></div>
		`;
	document.getElementById("bottom").scrollIntoView();
});