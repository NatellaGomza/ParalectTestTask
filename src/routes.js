import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import { AccountPage } from './pages/AccountPage'

export const useRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/404" component={ErrorPage} />
			<Route path="/account/:login" component={AccountPage} />
		</Switch>
	)
}