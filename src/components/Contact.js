import React from 'react';
import '../App.css';
import Navbar from './Navbar';

const Contact = ({titulo}) => {

    return(
        <div>
            <Navbar/>
            <div className="titulo">
                {titulo}
            </div>
            <div className="contact">Contact</div>
        </div>
    );

}   

export default Contact;