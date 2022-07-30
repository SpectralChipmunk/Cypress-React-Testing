const allItems = (app, fs) => {
	const itemData = './data/items.json';
	app.get('/allitems', (_req, res) => {
		fs.readFile(itemData, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	});
}

module.exports = allItems;