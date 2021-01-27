const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()
const app = express()
app.use(cors())
const router = express.Router()
app.use("/api", router)

router.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>")
})

router.get("/Facebook/GenerateToken", async (request, response) => {
	const result = await axios.get(
		`https://graph.facebook.com/oauth/access_token?client_id=${process.env.INSTAGRAM_APP_ID}&client_secret=${process.env.INSTAGRAM_CLIENT_TOKEN}&grant_type=client_credentials`
	)
	if (result.data.access_token != null) {
		response.json({ message: "Successfully retrieved access token" })
	}
	process.env.FACEBOOK_ACCESS_TOKEN = result.data.access_token
})

router.get("/Youtube", async (request, response) => {
	// this will make a request to the Youtube API
	// will retrieve the 5 or so most recent Youtube videos for my channel
	response.json({ message: "Youtube urls" })
})

router.get("/Spotify", async (request, response) => {
	// this will make a call to the Spotify API
	// will retrieve the 5 most recent songs on my account
	const client_id = process.env.SPOTIFY_CLIENT_ID
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET

	const result = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "Basic " + btoa(client_id + ":" + client_secret)
		},
		body: "grant_type=client_credentials"
	})

	const data = await result.json()
	//console.log(data.access_token)

	response.json({ message: "Spotify", access_token: data.access_token })
})

router.get("/InstagramToken", async (request, response) => {
	//console.log(`${process.env.INSTAGRAM_APP_ID}|${process.env.INSTAGRAM_CLIENT_TOKEN}`)
	response.json({
		access_token: `${process.env.INSTAGRAM_APP_ID}|${process.env.INSTAGRAM_CLIENT_TOKEN}`
	})
})

router.get("/InstagramHTML", async (request, response) => {
	let url = "https://www.instagram.com/p/CKO0_nUDa97/?utm_source=ig_web_copy_link"
	const token = await axios.get(
		`https://graph.facebook.com/oauth/access_token?client_id=${process.env.INSTAGRAM_APP_ID}&client_secret=${process.env.INSTAGRAM_CLIENT_TOKEN}&grant_type=client_credentials`
	)
	process.env.INSTAGRAM_ACCESS_TOKEN = token.data.access_token

	const result = await axios.get(
		`https://graph.facebook.com/v9.0/instagram_oembed?url=${url}/&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
	)
	response.json(result.data)
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
