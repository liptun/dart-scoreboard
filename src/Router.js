import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import PlayerForm from './components/PlayerForm'

const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={PlayerForm} exact={true} />
                <Route path="/create" component={NotFoundPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default Router
