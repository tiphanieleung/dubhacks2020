import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Storm from './Storm';
import Profile from './Profile';

const Main = () => (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/storm" component={Storm} />
                <Route path="/profile" component={Profile} />
            </Switch>
)


export default Main