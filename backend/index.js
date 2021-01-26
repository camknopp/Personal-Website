const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const router = express.Router()
app.use("/api", router)

router.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>")
})

router.get("/Youtube", async (request, response) => {
	// this will make a request to the Youtube API
	// will retrieve the 5 or so most recent Youtube videos for my channel
	response.json({ message: "Youtube urls" })
})

router.get("/Spotify", async (request, response) => {
	// this will make a call to the Spotify API
	// will retrieve the 5 most recent songs on my account
	response.json({ message: "Spotify" })
})

router.get("/Instagram", async (request, response) => {
	// this will make a call to the instagram api
	// will retrieve 5 or so most recent posts
	response.json({ message: "Instagram" })
})

router.get("/Facebook", async (request, response) => {
	//  .... will retrieve 5 most recent posts
	response.json({ message: "Facebook" })
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
