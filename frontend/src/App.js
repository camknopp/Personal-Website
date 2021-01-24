import React, { useState } from "react"
import "./App.css"
import { Instagram, Facebook, Youtube } from "react-feather"

function App() {
	/*
  create state to handle hovering over button, create css
  styles that handle opacity if hovered=true
  */

	const [nameHovered, setNameHovered] = useState(false)
	const [instagramHovered, setInstagramHovered] = useState(false)
	const [facebookHovered, setFacebookHovered] = useState(false)
	const [youtubeHovered, setYoutubeHovered] = useState(false)

	return (
		<div>
			<div style={{ whiteSpace: "pre-wrap" }}>{` `}</div>
			<header>
				<div
					class="main-title"
					style={{ opacity: nameHovered ? 0.5 : 1 }}
					onMouseOver={() => {
						setNameHovered(true)
					}}
					onMouseOut={() => {
						setNameHovered(false)
					}}
					cursor={nameHovered ? "pointer" : "cursor"}
				>
					Cam Knopp : Musician
				</div>
				<div class="social-buttons">
					<Instagram
						onMouseOver={() => {
							setInstagramHovered(true)
						}}
						onMouseOut={() => {
							setInstagramHovered(false)
						}}
						onClick={e => {
							e.preventDefault()
							window.open("https://www.instagram.com/camknopp/?hl=en")
						}}
						color="#9b6954"
						size={40}
						opacity={instagramHovered ? 0.5 : 1}
						cursor={instagramHovered ? "pointer" : "cursor"}
					/>
					<Facebook
						onMouseOver={() => {
							setFacebookHovered(true)
						}}
						onMouseOut={() => {
							setFacebookHovered(false)
						}}
						onClick={e => {
							e.preventDefault()
							window.open("https://www.facebook.com/camknoppmusic/")
						}}
						color="#4267B2"
						size={40}
						opacity={facebookHovered ? 0.5 : 1}
						cursor={facebookHovered ? "pointer" : "cursor"}
					/>
					<Youtube
						onMouseOver={() => {
							setYoutubeHovered(true)
						}}
						onMouseOut={() => {
							setYoutubeHovered(false)
						}}
						onClick={e => {
							e.preventDefault()
							window.open(
								"https://www.youtube.com/channel/UCcwGXpKW4HmBtmRC5I7wFEg"
							)
						}}
						color="red"
						size={40}
						opacity={youtubeHovered ? 0.5 : 1}
						cursor={youtubeHovered ? "pointer" : "cursor"}
					/>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<div class="subtitles" style={{ float: "left" }}>
					Home
				</div>
				<div class="subtitles" style={{ float: "left" }}>
					Music
				</div>
				<div class="subtitles" style={{ float: "left" }}>
					Merch
				</div>
				<div class="subtitles" style={{ float: "left" }}>
					About
				</div>
			</header>
		</div>
	)
}

export default App
