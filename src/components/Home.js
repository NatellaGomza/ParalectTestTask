import React from 'react'
import search from '../img/search-big.png'

export const Home = () => (
	<div className="home">
		<div className="home-img">
			<img src={search} alt="Search" />
		</div>
		<div className="home-text">
			Start with searching a GitHub user
			</div>
	</div>
)