import React from 'react';
import './Header.scss'
import TwitterLogo from '../../ASSETS/IMG/twitter-logo (6).png'



function Header() {
    return (<div className='header'>
        <img src={TwitterLogo} alt="tweetts"/>
        <h1>Tweet-Land</h1> 


    </div>)
}

export default Header;