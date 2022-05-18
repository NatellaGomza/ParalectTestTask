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
	const repoOwner = user.repoOwnerInfo
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
			const res = await request(`https://api.github.com/users/${repoOwner.login}/repos`)
			setRepos(res)
		}
		fetched()
	}, [repoOwner.login, request])

	if (loading) {
		return <Loader />
	}

	return (
		<div className="account">
			<div className="account-info">
				<div className="account-img">
					<img src={repoOwner.avatar_url} alt="User" />
				</div>
				<h4 className="account-name">{repoOwner.name}</h4>
				<a target="_blank" rel="noreferrer" href={repoOwner.html_url} className="account-login">{repoOwner.login}</a>

				<div className="account-followings">
					<div className="account-followers">
						<img src={followers} alt="followers" />
						<span className="followers-count">{repoOwner.followers} followers</span>
					</div>

					<div className="account-followers">
						<img src={following} alt="following" />
						<span className="following-count">{repoOwner.following} following</span>
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