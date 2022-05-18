import React from 'react'
import empty from '../img/empty.png'

export const ReposEmpty = () => (
	<div className="account-repos__empty">
		<img src={empty} alt="Icon" />
		<p>Repository list is empty</p>
	</div>
)