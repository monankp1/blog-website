import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <header className={styles.header}>
            <div>
                <Logo />
                
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </header>
    )
}

export default Header