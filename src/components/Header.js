import React from 'react'

import logo from '../img/logo.png'
import search from '../img/search-small.png'

export const Header = ({ changeHandler, pressHandler }) => {
	return (
		<header className="header">
			<div className="header-logo">
				<img src={logo} alt="Logo" />
			</div>

			<div className="header-search">
				<img src={search} alt="Search" />
				<input
					type="text"
					placeholder="Enter GitHub username"
					onKeyPress={pressHandler}
					onChange={changeHandler}
				/>
			</div>
		</header>
	)
}