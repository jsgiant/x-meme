const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const https = require("https");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("./src/routes");

dotenv.config();

const app = express();

const httpsOptions = {
	key: fs.readFileSync("./security/cert.key"),
	cert: fs.readFileSync("./security/cert.pem")
};

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", routes);
app.use(express.static("../frontend/build"));

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log("DATABASE CONNECTED!");
	})
	.catch((err) => {
		console.log("Database connection error", err);
	});

app.get("/", (req, res) => {
	res.sendFile("../frontend/build/index.html");
});

const port = process.env.PORT || 3001;

const server = https.createServer(httpsOptions, app).listen(port, () => {
	console.log(`Server running at ${port}!`);
});
