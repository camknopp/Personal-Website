import React, { useState } from "react"
import "./App.css"
import { Instagram, Facebook, Youtube } from "react-feather"
import MenuItem from "./components/MenuItem"
import SocialButton from "./components/SocialButton"

function App() {

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
				
        <SocialButton websiteName={"Youtube"} url={"https://www.youtube.com/channel/UCcwGXpKW4HmBtmRC5I7wFEg"} />
        <SocialButton websiteName={"Instagram"} url={"https://www.instagram.com/camknopp/?hl=en"} />
        <SocialButton websiteName={"Facebook"} url={"https://www.facebook.com/camknoppmusic/"} />
				<br></br>
				<br></br>
				<br></br>
				<br></br>

        <MenuItem url={"www.google.com"} name={"Home"} />
        <MenuItem url={"www.google.com"} name={"Music"} />
        <MenuItem url={"www.google.com"} name={"Merch"} />
        <MenuItem url={"www.google.com"} name={"About"} />

			</header>
		</div>
	)
}

export default App
