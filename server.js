// eslint-disable-next-line no-unused-vars
const { User, Pokemon, DexEntry } = require('./models');
const express = require('express');
const cors = require('cors');

module.exports = function() {
	const app = express();
	const port = 3001;

	app.use(cors());
	app.get('/profile/:id', async (req, res) => {
		const id = req.params.id;
		try {
			let data = await User.findById(id)
				.populate('party');
			data = await User.populate(data, {
				path: 'party.pokemon',
				select: 'name',
				model: DexEntry,
			});


			console.log(data);
			return res.json({ data });
		}
		catch (e) {
			console.log('error', e);
			return res.json({ e });
		}
	});
	app.listen(port, () => console.log(`server listening on port ${port}!`));
};
