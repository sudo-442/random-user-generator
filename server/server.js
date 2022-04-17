const express = require("express");
const config = require("./config");
const { log } = require("./handlers/logging");
const { limiter } = require("./middlewares/ratelimit")

const app = express();
const port = config.port || 443

app.use(limiter);
app.use(express.static("client/build"))

app.get("/", (req, res) => {
	res.sendFile(
		"index.html",
		{
			root: "../client/build"
		}
	)
})

app.listen(port, () => {
	log(`Server is listening on port ${port}.`)
})
