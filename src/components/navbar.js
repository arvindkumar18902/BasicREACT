import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {Button} from './button';

function Navbar() {
    const [Click, setClick] = useState(false);

    const [button,setButton] = useState(true);

    const handleClick = () => setClick(Click);

    const closeMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton([]);
    });

    window.addEventListener('resize',showButton);
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = "/" className="navbar-logo">
                        AK <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onCLick ={handleClick}>
                        <i className={Click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {Click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/' className = 'nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/about-me' className = 'nav-links' onClick={closeMenu}>
                                About me
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonstyle='btn--outline'>ABOUT ME</Button>}
                </div>
            </nav>

        </>
    )
 
}

export default Navbar