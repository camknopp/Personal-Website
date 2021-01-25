import React, { useState } from "react"
import "../App.css"

const MenuItem = ({ name, url }) => {

	return (
		<div>
			<div
				onClick={e => {
					e.preventDefault()
					window.open(url)
				}}
				className="subtitles"
				style={{ float: "left" }}
			>
				{name}
			</div>
		</div>
	)
}

export default MenuItem
