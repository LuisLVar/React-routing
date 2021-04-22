import React from 'react';
import '../App.css';
import Navbar from './Navbar';

const About = ({titulo}) => {

    return(
        <div>
            <Navbar />
            <div className="titulo">
                {titulo}
            </div>
            <div className="about">About</div>
        </div>

    );

}   

export default About;