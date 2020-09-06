import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import NewGamePage from './components/NewGamePage'
import GamePage from './components/GamePage'
import Footer from './components/Footer'

const Router = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route path="/" component={NewGamePage} exact={true} />
                <Route path="/game" component={GamePage} exact={true} />
                <Route path="/setup" component={NewGamePage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </Fragment>
    </BrowserRouter>
)
export default Router
