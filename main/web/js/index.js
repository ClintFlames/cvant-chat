const query = document.location.search
		.slice(1)
		.split("&")
		.map((p) => p.split("="))
		.reduce((obj, [ key, value ]) => ({ ...obj, [key]: value }), {}),
	script = document.createElement("script");

if (!Object.keys(query).includes("level")) {
	window.location.replace(`${document.location.origin}${document.location.pathname}?level=anarchy`);
}
switch (query.level) {
case "anarchy":
	script.src = "/js/anarchy.js";
	break;
default:
	window.location.replace(`${document.location.origin}${document.location.pathname}?level=anarchy`);
	break;
}
// document.getElementById("chat").style.height = "33%"; // `${screen.height / 3}px`;
// document.getElementById("chat").style.width = "100%"; // `${(screen.width / 10) * 9}px`;
document.getElementsByTagName("head")[0].appendChild(script);