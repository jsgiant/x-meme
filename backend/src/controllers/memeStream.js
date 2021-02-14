const Meme = require("../models/meme");

exports.getMemes = (req, res) => {
	const page = req.query.page ? parseInt(req.query.page) : 0;
	const limit = req.query.limit ? parseInt(req.query.limit) : 100;

	let total = 0;

	Meme.find().exec((err, memes) => {
		if (err) {
			return res
				.status(400)
				.json({ error: "Oops! Something went wrong. Please try again!" });
		}
		total = memes.length;
	});

	Meme.find()
		.skip(page * limit)
		.limit(limit)
		.sort([["createdAt", "desc"]])
		.exec((err, items) => {
			if (err) {
				return res
					.status(400)
					.json({ error: "Oops! Something went wrong. Please try again!" });
			}
			const memes = [];
			items.forEach((meme) => {
				memes.push({
					id: meme.id,
					name: meme.name,
					caption: meme.caption,
					url: meme.url
				});
			});
			return res.status(200).json({ memes, total });
		});
};

exports.postMeme = (req, res) => {
	const {
		body: { name, caption, url }
	} = req;

	Meme.find({ url }).exec((err, item) => {
		if (item.length > 0) {
			return res.status(409).json({ error: "Meme already exists!" });
		} else {
			const meme = new Meme({
				name,
				caption,
				url
			});
			meme.save((err, meme) => {
				if (err) {
					return res
						.status(400)
						.json({ error: "Oops! Something went wrong. Please try again!" });
				}
				return res.status(200).json({ id: meme.id });
			});
		}
	});
};

exports.getMeme = (req, res) => {
	const {
		params: { id }
	} = req;

	Meme.findById(id).exec((err, meme) => {
		if (err) {
			return res
				.status(400)
				.json({ error: "Oops! Something went wrong. Please try again!" });
		}
		if (!meme) {
			return res.status(404).json({ error: "Meme doesn't exist!" });
		}
		const { id, name, caption, url } = meme;
		return res.status(200).json({ id, name, caption, url });
	});
};

exports.deleteMeme = (req, res) => {
	const {
		params: { id }
	} = req;

	Meme.findByIdAndDelete(id).exec((err, item) => {
		if (err) {
			return res.status(400).json({ error: "Invalid Meme id!" });
		}
		return res.status(200).json({});
	});
};

exports.editMeme = (req, res) => {
	const {
		params: { id },
		body: { caption, url }
	} = req;
	const updatedMeme = {};

	if (caption) {
		updatedMeme.caption = caption;
	}
	if (url) {
		updatedMeme.url = url;
	}

	Meme.findByIdAndUpdate(id, updatedMeme, {
		useFindAndModify: false,
		upsert: true
	}).exec((err, meme) => {
		if (err) {
			return res.status(400).json({ error: "Invalid Meme id!" });
		}
		return res.status(200).json({ id });
	});
};
