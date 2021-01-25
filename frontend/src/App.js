import React, { useState, useEffect } from "react"
import "./App.css"
import MenuItem from "./components/MenuItem"
import SocialButton from "./components/SocialButton"
import InstagramEmbed from "react-instagram-embed"
import ReactPlayer from "react-player"
import SpotifyPlayer from "react-spotify-player"
import { Facebook } from "reactjs-social-embed"
import { Collapse } from "react-collapse"


function App() {

  const [open, setOpen] = useState(false)

	return (
    <div>
    <button onClick={(e) => {
      e.preventDefault()
      setOpen(!open)
    }} >click</button>
    <Collapse className="ReactCollapse--collapse" isOpened={open}>
		<div>
			<header className="sticky-header">
				<div className="main-title">Cam Knopp : Musician</div>

				<SocialButton
					websiteName={"Youtube"}
					url={"https://www.youtube.com/channel/UCcwGXpKW4HmBtmRC5I7wFEg"}
				/>
				<SocialButton
					websiteName={"Instagram"}
					url={"https://www.instagram.com/camknopp/?hl=en"}
				/>
				<SocialButton
					websiteName={"Facebook"}
					url={"https://www.facebook.com/camknoppmusic/"}
				/>
        <SocialButton websiteName="Spotify" url="https://open.spotify.com/artist/2IdGjQXZoh0RKJlYFabIce?si=a7cTK0y-QQeF1Qxbm-sJVg" />
				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<MenuItem url={"www.google.com"} name={"Home"} />
				<MenuItem url={"www.google.com"} name={"Music"} />
				<MenuItem url={"www.google.com"} name={"Merch"} />
				<MenuItem url={"www.google.com"} name={"About"} />

				<br></br>
				<br></br>
				<br></br>
			</header>

			<div style={{textAlign: "center"}}>
				<ReactPlayer url="https://www.youtube.com/watch?v=3fmqava7CxI&ab_channel=CamKnoppMusic" />
			</div>
			<div style={{textAlign: "center"}}>
				<SpotifyPlayer uri="https://open.spotify.com/track/7ItGXjb2MaHFwrWQcBphCA?si=j8LAki_pQFCh2G7d5iu74w" />
			</div>
      <div style={{textAlign: "center"}}>
			<Facebook
				type="post"
				width="100%"
				height="680px"
				show_text={true}
				url="https://www.facebook.com/camknoppmusic/posts/1806289546203955"
			/>
      </div>
		</div>
    </Collapse>
    </div>
	)
}

export default App
