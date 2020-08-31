import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'

const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={NotFoundPage} exact={true} />
                <Route path="/create" component={NotFoundPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default Router
