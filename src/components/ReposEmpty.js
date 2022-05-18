import React from 'react'
import empty from '../img/empty.png'

export const ReposEmpty = () => (
	<div className="account-repos-empty">
		<img src={empty} alt="Icon" />
		<div>Repository list is empty</div>
	</div>
)