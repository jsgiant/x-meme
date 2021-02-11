const { Schema, model } = require("mongoose");

const memeSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true
		},
		caption: {
			type: String,
			trim: true,
			required: false
		},
		url: {
			type: String,
			trim: true,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = model("Meme", memeSchema);
