import React from 'react';
import '../styles/Header.scss'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <h1 className='title'>Weather</h1>
            <Link to="/" className="page-link">Home</Link>
            <Link to="/help" className="page-link">Help</Link>
        </div>
    );
}