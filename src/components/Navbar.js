import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );

}   

export default Navbar;