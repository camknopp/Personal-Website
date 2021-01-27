import React, { useState } from "react"
import "../App.css"

const SocialLink = ({ text, link }) => {
	return (
		<h1 onClick={(e) => {
            e.preventDefault()
            window.open(link)
        }} className="social-link">
			{text}
		</h1>
	)
}

export default SocialLink
