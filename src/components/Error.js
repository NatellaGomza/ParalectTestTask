import React from 'react'
import user from '../img/user.png'

export const Error = () => (
	<div className="error">
		<div className="error-img">
			<img src={user} alt="User" />
		</div>
		<div className="error-text">
			User not found
			</div>
	</div>
)