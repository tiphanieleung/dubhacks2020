import React, { useState, useEffect } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import logo from "./images/Logo.svg"
import login from "./images/LoginBoi.svg"
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

    return (
    <div>
        <Header className='header-color' title={<Link to="/"><img style={{width:"75px", height:"75px"}} src={logo} alt="login" /></Link>} >
            <Navigation>
                <Link to="/home" style={{ color: 'black'}}>Home</Link>
                <Link to="/storm" style={{ color: 'black' }}>Storm</Link>
                <Link to="/about" style={{ color: 'black' }}>About</Link>
                <Link to="/profile" style={{ color: 'black' }}><img style={{width:"50px", height:"50px"}} src={login} alt="login" /></Link>
            </Navigation>
        </Header>
        <Content>
            <Main />
        </Content>
    </div>
    );
}


export default App;
