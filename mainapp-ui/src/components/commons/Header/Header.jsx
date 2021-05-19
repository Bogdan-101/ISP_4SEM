import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


export const Header = () => (
    <div className="header">
        <Link to={{ pathname: '/', fromDashboard: false }} className='header__link'>Main page</Link>
    </div>
)