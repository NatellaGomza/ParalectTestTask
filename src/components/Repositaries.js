import React from 'react'

export const Repositaries = ({ repos, reposLen }) => {
	return (
		<div className="account-repos-list">
			<h2>Repositories ({reposLen})</h2>

			<div className="repositories">
				{
					repos.map(rep => (
						<div className="repos" key={rep.id}>
							<a href={rep.html_url} rel="noreferrer" target="_blank" className="repos-title">{rep.name}</a>
							<div className="repos-description">{rep.description}</div>
						</div>
					))
				}
			</div>
		</div>
	)
}