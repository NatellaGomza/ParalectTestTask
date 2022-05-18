import React, { useState, useEffect } from 'react'

import followers from '../img/followers.png'
import following from '../img/following.png'

import { ReposEmpty } from '../components/ReposEmpty'
import { Repositaries } from './Repositaries'
import { useHttp } from '../hooks/http.hook'
import { Loader } from './Loader'

import { Pagination } from './Pagination'

export const Account = (user) => {
	const { request, loading } = useHttp()
	const candidate = user.candidateInfo
	const [repos, setRepos] = useState([])

	const [curPage, setCurPage] = useState(0)
	const [perPage] = useState(4)

	const pageVisited = curPage * perPage
	const currentRep = repos.slice(pageVisited, pageVisited + perPage)

	const pageCount = Math.ceil(repos.length / perPage)

	const changePage = ({ selected }) => {
		setCurPage(selected)
	}

	useEffect(() => {
		setCurPage(0)
		const fetched = async () => {
			const res = await request(`https://api.github.com/users/${candidate.login}/repos`)
			setRepos(res)
		}
		fetched()
	}, [candidate.login, request])

	if (loading) {
		return <Loader />
	}

	return (
		<div className="account">
			<div className="account-info">
				<div className="account-info__img">
					<img src={candidate.avatar_url} alt="User" />
				</div>
				<h4 className="account-info__name">{candidate.name}</h4>
				<a target="_blank" rel="noreferrer" href={candidate.html_url} className="account-info__login">{candidate.login}</a>

				<div className="account-info__foll">
					<div className="account-info__foll-owers">
						<img src={followers} alt="followers" />
						<span className="followers-count">{candidate.followers} followers</span>
					</div>

					<div className="account-info__foll-owers">
						<img src={following} alt="following" />
						<span className="following-count">{candidate.following} following</span>
					</div>
				</div>
			</div>

			<div className="account-repos">
				{
					loading ? <Loader /> : null
				}

				{
					repos.length
						? <Repositaries
							repos={currentRep}
							reposLen={repos.length}
						/>
						: <ReposEmpty />
				}

				{
					repos.length > perPage
						? <Pagination
							pageCount={pageCount}
							changePage={changePage}
							reposLen={repos.length}
							perPage={perPage}
							curPage={curPage}
						/>
						: null
				}
			</div>
		</div >
	)
}