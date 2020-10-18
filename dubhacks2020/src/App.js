import React, { useState, useEffect } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from './pages/main';
import { Link } from 'react-router-dom';

import './style.css';

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
    <Header className='header-color' title={<Link to="/" style={{ color: 'black', textDecoration: 'none'}}>F</Link>} scroll>
            <Navigation>
                <Link to="/home" style={{ color: 'black' }}>Home</Link>
                <Link to="/about" style={{ color: 'black' }}>About</Link>
                <Link to="/storm" style={{ color: 'black' }}>Storm</Link>
                <Link to="/profile" style={{ color: 'black' }}>Profile</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link to="/" style={{ color: 'grey', textDecoration: 'none'}}>F</Link>}>
            <Navigation>
                <Link to="/home" style={{ color: 'black' }}>Home</Link>
                <Link to="/about" style={{ color: 'black' }}>About</Link>
                <Link to="/storm" style={{ color: 'black' }}>Storm</Link>
                <Link to="/profile" style={{ color: 'black' }}>Profile</Link>
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
    <Header className='header-color' title={<Link to="/" style={{ color: 'black', textDecoration: 'none'}}>F</Link>} scroll>
            <Navigation>
                <Link to="/home" style={{ color: 'black' }}>Home</Link>
                <Link to="/about" style={{ color: 'black' }}>About</Link>
                <Link to="/storm" style={{ color: 'black' }}>Storm</Link>
                <Link to="/profile" style={{ color: 'black' }}>Profile</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link to="/" style={{ color: 'grey', opacity: '0.9', textDecoration: 'none'}}>F</Link>}>
            <Navigation>
                <Link to="/home" style={{ color: 'black' }}>Home</Link>
                <Link to="/about" style={{ color: 'black' }}>About</Link>
                <Link to="/storm" style={{ color: 'black' }}>Storm</Link>
                <Link to="/profile" style={{ color: 'black' }}>Profile</Link>
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
