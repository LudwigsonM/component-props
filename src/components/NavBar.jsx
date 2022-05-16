import React from 'react';
import '../styles/NavBar.css';

function NavBar(){
    // do some stuff
    return(
        <nav className='navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Account</li>
            </ul>
        </nav>
    )
}


export default NavBar;