import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Match from '../match/match'
import Connection from '../connection/connection'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Match} />
            <Route path='/connections' component={Connection} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)