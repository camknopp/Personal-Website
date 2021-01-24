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
				>
					Cam Knopp : Musician
				</div>
				<div style={{ textAlign: "right" }}>
					<Instagram
            onMouseOver={() => {
							setInstagramHovered(true)
            }}
            onMouseOut={() => {
							setInstagramHovered(false)
						}}
						color="#9b6954"
						size={40}
						opacity={instagramHovered ? 0.5 : 1}
					/>
					<Facebook
            onMouseOver={() => {
							setFacebookHovered(true)
            }}
            onMouseOut={() => {
							setFacebookHovered(false)
						}}
						color="#4267B2"
						size={40}
						opacity={facebookHovered ? 0.5 : 1}
					/>
					<Youtube
						onMouseOver={() => {
							setYoutubeHovered(true)
            }}
            onMouseOut={() => {
							setYoutubeHovered(false)
						}}
						color="red"
						size={40}
						opacity={youtubeHovered ? 0.5 : 1}
					/>
				</div>
				<p>word</p>
			</header>
		</div>
	)
}

export default App
