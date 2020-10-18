import React, { useState, useEffect } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from './pages/main';
import { Link } from 'react-router-dom';

function App() {
    let [width, setWidth] = useState(window.innerWidth)

    let resizeWindow = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        resizeWindow()
        window.addEventListener('resize', resizeWindow)
        return () => window.removeEventListener('resize', resizeWindow)
    }, [])

    console.log(width)
if (width > 500) {
  return (
<div className="demo-big-content">
    <Layout fixedHeader>
    <Header className='header-color' title={<Link to="/" style={{ color: 'white', textDecoration: 'none'}}>F</Link>} scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/board">Board</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link to="/" style={{ color: 'grey', textDecoration: 'none'}}>F</Link>}>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/board">Board</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
} else {
    return (
    <div className="demo-big-content">
    <Layout>
    <Header className='header-color' title={<Link to="/" style={{ color: 'white', textDecoration: 'none'}}>F</Link>} scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/board">Board</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link to="/" style={{ color: 'grey', opacity: '0.9', textDecoration: 'none'}}>F</Link>}>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/board">Board</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
}
}

export default App;









// {/* <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div> */}
