import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import NewGameSetup from './components/NewGameSetup'

const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={NotFoundPage} exact={true} />
                <Route path="/game" component={NotFoundPage} exact={true} />
                <Route path="/setup" component={NewGameSetup} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default Router
