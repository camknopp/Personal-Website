import React, { useState, useEffect } from "react"
import "./App.css"
import SocialButton from "./components/SocialButton"
import InstagramEmbed from "react-instagram-embed"
import ReactPlayer from "react-player"
import SpotifyPlayer from "react-spotify-player"
import { Facebook } from "reactjs-social-embed"
import { Collapse } from "react-collapse"
import AboutPage from "./components/AboutPage"
import SocialLink from "./components/SocialLink"

import socialMediaService from "./services/retrieveSocialMedia"

function App() {
	// states used to determine which content is hidden/shown
	const [showAbout, setShowAbout] = useState(true)
	const [showYoutube, setShowYoutube] = useState(false)
	const [showInstagram, setShowInstagram] = useState(false)
	const [showFacebook, setShowFacebook] = useState(false)
	const [showSpotify, setShowSpotify] = useState(false)
	const [urls, setUrls] = useState([])

	let client_access_tok = "413756139694463|a698c81787ce91d8f6d7160dfb0c6d91" // app-id|client_token

	// const getUrls = async () => {
	// 	res = await socialMediaService.getYoutubeUrls()
	// 	console.log(typeof res)
	// }
	
	// useEffect(async () => {
	// 	const getUrls = async () => {
	// 		let result = await socialMediaService.getYoutubeUrls()
	// 		setUrls([result.url1, result.url2, result.url3, result.url4, result.url5])
	// 	}
	// }, [])

	// console.log(urls)

	return (
		<div>
			<div>
				<header className="sticky-header">
					<div
						onClick={e => {
							e.preventDefault()
							setShowAbout(!showAbout)
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth"
							})
							setTimeout(() => {
								setShowFacebook(false)
								setShowInstagram(false)
								setShowYoutube(false)
								setShowSpotify(false)
							}, 100)
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
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth"
								})
								setTimeout(() => {
									setShowInstagram(false)
									setShowFacebook(false)
									setShowSpotify(false)
									setShowAbout(false)
								}, 100)
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
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth"
								})
								setTimeout(() => {
									setShowFacebook(false)
									setShowYoutube(false)
									setShowSpotify(false)
									setShowAbout(false)
								}, 100)
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
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth"
								})
								setTimeout(() => {
									setShowInstagram(false)
									setShowYoutube(false)
									setShowSpotify(false)
									setShowAbout(false)
								}, 100)
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
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth"
								})
								setTimeout(() => {
									setShowFacebook(false)
									setShowInstagram(false)
									setShowYoutube(false)
									setShowAbout(false)
								}, 100)
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
						{/* <div className="card">
							<ReactPlayer url={res[0][0]} />
						</div> */}
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=3fmqava7CxI" />
						</div>
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=4Jrp1jKm_gE" />
						</div>
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=SZ1Q1v5Q1hw" />
						</div>
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=nneF1GRC8fQ&ab_channel=CamKnoppMusic" />
						</div>
						<div className="card">
							<ReactPlayer url="https://www.youtube.com/watch?v=3_PXSOW2JBo&ab_channel=CamKnoppMusic" />
						</div>
						{/* <div className="card">
							<ReactPlayer url={`https://www.youtube.com/${urls[0]}&ab_channel=CamKnoppMusic`} />
						</div> */}
					</div>
					<br></br>
					<br></br>
					<div className="flex-container">
						<SocialLink
							text="Visit Youtube Page"
							link="https://www.youtube.com/channel/UCcwGXpKW4HmBtmRC5I7wFEg"
						/>
					</div>
					<br></br>
					<br></br>
				</Collapse>

				<Collapse className=".ReactCollapse--collapse" isOpened={showSpotify}>
					<div className="scrolling-wrapper-flexbox">
						<div className="card">
							<SpotifyPlayer uri="https://open.spotify.com/track/7ItGXjb2MaHFwrWQcBphCA?si=j8LAki_pQFCh2G7d5iu74w" />
						</div>
						<div className="card">
							<SpotifyPlayer uri="https://open.spotify.com/track/1wT1ZSB11W8PYHNSl7afqJ?si=oAawGXi1SjmFBVV6oWsjSg" />
						</div>
						<div className="card">
							<SpotifyPlayer uri="https://open.spotify.com/track/1IGdlPlwzuy57O9xCg0HmD?si=Rx8DDmzVQBmX6AAW609CbA" />
						</div>
					</div>
					<br></br>
					<br></br>
					<div className="flex-container">
						<SocialLink
							text="Visit Spotify Page"
							link="https://open.spotify.com/artist/2IdGjQXZoh0RKJlYFabIce?si=QDo6PltoRUiud-KDcUhfhQ"
						/>
					</div>
					<br></br>
					<br></br>
				</Collapse>

				<Collapse className=".ReactCollapse--collapse" isOpened={showFacebook}>
					<div className="scrolling-wrapper-flexbox">
						<div className="facebook-card">
							<Facebook
								type="post"
								width="100%"
								height="680px"
								show_text={true}
								url="https://www.facebook.com/camknoppmusic/posts/1806289546203955"
							/>
						</div>
						<div className="card">
							<Facebook
								type="post"
								width="100%"
								//height="680px"
								show_text={true}
								url="https://www.facebook.com/camknoppmusic/posts/987330084766576"
							/>
						</div>
					</div>
					<br></br>
					<br></br>
					<div className="flex-container">
						<SocialLink
							text="Visit Facebook Page"
							link="https://www.facebook.com/camknoppmusic/"
						/>
					</div>
					<br></br>
					<br></br>
				</Collapse>

				<Collapse className=".ReactCollapse--collapse" isOpened={showInstagram}>
					<div className="scrolling-wrapper-flexbox">
						<div className="card">
							<InstagramEmbed
								url="https://www.instagram.com/p/CKO0_nUDa97/?utm_source=ig_web_copy_link"
								clientAccessToken={client_access_tok}
							/>
						</div>
						<div className="card">
							<InstagramEmbed
								url="https://www.instagram.com/p/CKADSRiD6n2/?utm_source=ig_web_copy_link"
								clientAccessToken={client_access_tok}
							/>
						</div>
						<div className="card">
							<InstagramEmbed
								url="https://www.instagram.com/p/CJ4eEb7rkrS/?utm_source=ig_web_copy_link"
								clientAccessToken={client_access_tok}
							/>
						</div>
						<div className="card">
							<InstagramEmbed
								url="https://www.instagram.com/p/CJ1-tUkrLpn/?utm_source=ig_web_copy_link"
								clientAccessToken={client_access_tok}
							/>
						</div>
						<div className="card">
							<InstagramEmbed
								url="https://www.instagram.com/p/CJr0VnkjYe2/?utm_source=ig_web_copy_link"
								clientAccessToken={client_access_tok}
							/>
						</div>
					</div>
					<br></br>
					<br></br>
					<div className="flex-container">
						<SocialLink
							text="Visit Instagram Page"
							link="https://www.instagram.com/camknopp/"
						/>
					</div>
					<br></br>
					<br></br>
				</Collapse>
			</div>
		</div>
	)
}

export default App
