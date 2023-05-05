import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

  return (
    <header>
        <nav>
            <div className='logo' onClick={() => navigate('/')} >
                <span>QuadB</span>
                <span>TECH</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
