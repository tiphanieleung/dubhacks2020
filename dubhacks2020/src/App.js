import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Board from './pages/Board';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/board" exact component={Board} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}
