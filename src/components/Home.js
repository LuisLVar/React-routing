import React from 'react';
import '../App.css';
import Navbar from './Navbar';

const Home = (props) => {

    return(
        <div>
            <Navbar />
            <div className="titulo">
                {props.titulo}
            </div>
            <div className="home">Home</div>
            <button onClick={
                
                () => props.setTitulo("Titulo dado por Home")
            }>
                Cambiar titulo
            </button>
        </div>

    );

}   

export default Home;