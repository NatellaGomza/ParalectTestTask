import React from 'react'
import user from '../img/user.png'

export const Error = () => (
	<div className="error">
		<div className="error__img">
			<img src={user} alt="User" />
		</div>
		<p className="error__text">
			User not found
			</p>
	</div>
)