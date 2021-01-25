import React, { useState } from "react"
import "../App.css"
import { Instagram, Facebook, Youtube } from "react-feather"

const SocialButton = ({ websiteName, url }) => {
	if (websiteName === "Facebook") {
		return (
			<div className="social-button">
				<Facebook
					onClick={e => {
						e.preventDefault()
						window.open(url)
					}}
					color="#4267B2"
					size={40}
				/>
			</div>
		)
	} else if (websiteName === "Instagram") {
		return (
			<div className="social-button">
				<Instagram
					onClick={e => {
						e.preventDefault()
						window.open("https://www.instagram.com/camknopp/?hl=en")
					}}
					color="#9b6954"
					size={40}
				/>
			</div>
		)
	} else if (websiteName === "Youtube") {
		return (
			<div className="social-button">
				<Youtube
					onClick={e => {
						e.preventDefault()
						window.open(url)
					}}
					color="red"
					size={40}
				/>
			</div>
		)
	}
	return <div></div>
}

export default SocialButton
