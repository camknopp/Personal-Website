import React, { useState } from "react"
import "../App.css"
import { Instagram, Facebook, Youtube } from "react-feather"
import { FaSpotify } from "react-icons/fa"
import { Collapse } from "react-collapse"

const SocialButton = ({ websiteName, url }) => {
//	const [open, setOpen] = useState(false)

	

	if (websiteName === "Facebook") {
		return (
			<div className="social-button">
				<Facebook
					// onClick={e => {
					// 	e.preventDefault()
					// 	window.open(url)
					// }}
					color="#4267B2"
					size={40}
				/>
			</div>
		)
	} else if (websiteName === "Instagram") {
		return (
			<div className="social-button">
				<Instagram
					// onClick={e => {
					// 	e.preventDefault()
					// 	window.open("https://www.instagram.com/camknopp/?hl=en")
					// }}
					color="#9b6954"
					size={40}
				/>
			</div>
		)
	} else if (websiteName === "Youtube") {
		return (
			<div className="social-button">
				{/* <h1>Most recent Youtube vids...</h1> */}
				<Youtube
					// onClick={e => {
					// 	e.preventDefault()
					// 	window.open(url)
					// }}
					color="red"
					size={40}
				/>
			</div>
		)
	} else if (websiteName === "Spotify") {
		return (
			<div className="social-button">
				<FaSpotify
					color="#1DB954"
					size="40"
					// onClick={e => {
					// 	e.preventDefault()
					// 	window.open(url)
					// }}
				/>
			</div>
		)
	}
	return <div></div>
}

export default SocialButton
