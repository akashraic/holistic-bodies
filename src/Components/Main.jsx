import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Terms from './Terms'

const Main = () => (
    <main>
        <Router>
            <Route path='/Terms' component={Terms}/>
        </Router>

    </main>
);

export default Main;