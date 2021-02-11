const { Router } = require("express");

const {
	getMemes,
	postMeme,
	getMeme,
	deleteMeme,
	editMeme
} = require("../controllers/memeStream");

const router = Router();

router.get("/memes", getMemes);
router.post("/memes", postMeme);
router.get("/memes/:id", getMeme);
router.delete("/memes/:id/delete", deleteMeme);
router.patch("/memes/:id/edit", editMeme);

module.exports = router;
