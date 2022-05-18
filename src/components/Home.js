import React from 'react'
import search from '../img/search-big.png'

export const Home = () => (
	<div className="home">
		<div className="home__img">
			<img src={search} alt="Search" />
		</div>
		<p className="home__text">
			Start with searching a GitHub user
			</p>
	</div>
)