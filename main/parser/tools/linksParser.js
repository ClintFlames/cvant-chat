module.exports = (text) => {
	const links = { audio: [], video: [], image: [], other: [] },
		linksUrlencoded = text.match(/(?:https?:\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))?/ig);
	if (linksUrlencoded) {
		for (const link of linksUrlencoded) {
			links[(
				link.match(/.(mp3|ogg|wav)/ig) ? "audio" : (
					link.match(/.(mp4|ogv|webm)/ig) ? "video" : (
						link.match(/.(jpeg|gif|png|apng|svg|bmp)/ig) ? "image" : "other"
					)
				)
			)].push({
				link,
				position: text.indexOf(link)
			});
		}
	}
	return links;
};