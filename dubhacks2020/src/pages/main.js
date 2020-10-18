import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Board from './Board';


const Main = () => (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/board" component={Board} />
            </Switch>
)


export default Main