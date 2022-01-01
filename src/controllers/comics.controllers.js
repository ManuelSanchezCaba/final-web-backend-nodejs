const fetch = require('node-fetch');

const getAllComic = async (req, res) => {
	try {
		const comics = await fetch(
			`${process.env.URL_ENDPOINT}?api_key=${process.env.API_KEY}&format=${process.env.FORMAT}`
		).then((response) => response.json());

		res.status(200).json(comics.results);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const getComicByName = async (req, res) => {
	try {
		const { name } = req.body;
		const comic = await fetch(
			`${process.env.URL_ENDPOINT}?api_key=${process.env.API_KEY}&format=${process.env.FORMAT}&filter=name:${name}`
		).then((response) => response.json());

		res.status(200).json(comic.results);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getAllComic,
	getComicByName,
};
