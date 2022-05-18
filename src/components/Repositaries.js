import React from 'react'

export const Repositaries = ({ repos, reposLen }) => {
	return (
		<div className="account-repos__repos-list">
			<h2>Repositories ({reposLen})</h2>

			<div className="repositories">
				{
					repos.map(rep => (
						<div className="repos" key={rep.id}>
							<a href={rep.html_url} rel="noreferrer" target="_blank" className="repos__title">{rep.name}</a>
							<p className="repos__desc">{rep.description}</p>
						</div>
					))
				}
			</div>
		</div>
	)
}