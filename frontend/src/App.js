import React, { useState, useEffect } from "react"
import "./App.css"
import SocialButton from "./components/SocialButton"
import InstagramEmbed from "react-instagram-embed"
import ReactPlayer from "react-player"
import SpotifyPlayer from "react-spotify-player"
import { Facebook } from "reactjs-social-embed"
import { Collapse } from "react-collapse"
import AboutPage from "./components/AboutPage"

function App() {
	const [showAbout, setShowAbout] = useState(false)
	const [showYoutube, setShowYoutube] = useState(false)
	const [showInstagram, setShowInstagram] = useState(false)
	const [showFacebook, setShowFacebook] = useState(false)
	const [showSpotify, setShowSpotify] = useState(false)

	return (
		<div>
			<div>
				<header className="sticky-header">
					<div
						onClick={e => {
							e.preventDefault()
							setShowAbout(!showAbout)
							setShowFacebook(false)
							setShowInstagram(false)
							setShowYoutube(false)
							setShowSpotify(false)
						}}
						className="main-title"
					>
						Cam Knopp : Musician
					</div>

					<br></br>
					<br></br>

					<div className="flex-container">
						<div>{}</div>
						<div
							onClick={e => {
								e.preventDefault()
								setShowYoutube(!showYoutube)
								setShowInstagram(false)
								setShowFacebook(false)
								setShowSpotify(false)
								setShowAbout(false)
							}}
						>
							<SocialButton
								websiteName={"Youtube"}
								url={"https://www.youtube.com/channel/UCcwGXpKW4HmBtmRC5I7wFEg"}
							/>
						</div>
						<div
							onClick={e => {
								e.preventDefault()
								setShowInstagram(!showInstagram)
								setShowFacebook(false)
								setShowYoutube(false)
								setShowSpotify(false)
								setShowAbout(false)
							}}
						>
							<SocialButton
								websiteName={"Instagram"}
								url={"https://www.instagram.com/camknopp/?hl=en"}
							/>
						</div>
						<div
							onClick={e => {
								e.preventDefault()
								setShowFacebook(!showFacebook)
								setShowInstagram(false)
								setShowYoutube(false)
								setShowSpotify(false)
								setShowAbout(false)
							}}
						>
							<SocialButton
								websiteName={"Facebook"}
								url={"https://www.facebook.com/camknoppmusic/"}
							/>
						</div>
						<div
							onClick={e => {
								e.preventDefault()
								setShowSpotify(!showSpotify)
								setShowFacebook(false)
								setShowInstagram(false)
								setShowYoutube(false)
								setShowAbout(false)
							}}
						>
							<SocialButton
								websiteName="Spotify"
								url="https://open.spotify.com/artist/2IdGjQXZoh0RKJlYFabIce?si=a7cTK0y-QQeF1Qxbm-sJVg"
							/>
						</div>
					</div>
					<br></br>
				</header>
				<Collapse className=".ReactCollapse--collapse" isOpened={showAbout}>
					<AboutPage />
				</Collapse>

				<Collapse className=".ReactCollapse--collapse" isOpened={showYoutube}>
					<div className="scrolling-wrapper-flexbox">
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=3fmqava7CxI&ab_channel=CamKnoppMusic" />
						</div>
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=4Jrp1jKm_gE&feature=youtu.be&ab_channel=CamKnoppMusic" />
						</div>
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=SZ1Q1v5Q1hw&ab_channel=CamKnoppMusic" />
						</div>
					</div>
				</Collapse>
				<Collapse className=".ReactCollapse--collapse" isOpened={showSpotify}>
					<div className="flex-container">
						<SpotifyPlayer uri="https://open.spotify.com/track/7ItGXjb2MaHFwrWQcBphCA?si=j8LAki_pQFCh2G7d5iu74w" />
					</div>
				</Collapse>
				<Collapse className=".ReactCollapse--collapse" isOpened={showFacebook}>
					<div className="flex-container">
						<Facebook
							type="post"
							width="100%"
							height="680px"
							show_text={true}
							url="https://www.facebook.com/camknoppmusic/posts/1806289546203955"
						/>
					</div>
				</Collapse>

				{/* TODO: ADD IN INSTAGRAM EMBEDDING */}
			</div>
		</div>
	)
}

export default App
