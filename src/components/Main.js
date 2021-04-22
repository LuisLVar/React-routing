import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {fetchQuestions} from '../shared/requests';


const Main = () => {

    const [titulo, setTitulo] = useState("Clase 13");
    // const [data, setData] = useState([]);

    // fetchQuestions()

    // console.log(data);

    return(
        <Switch>
            
            <Route path="/home" component={ () => <Home titulo={titulo} setTitulo={setTitulo} /> }  />
            <Route path="/contact" component={ () => <Contact titulo={titulo} setTitulo={setTitulo}/> }  />
            <Route path="/about" component={ () => <About titulo={titulo} setTitulo={setTitulo} /> }  />
            <Redirect to="/home" />
        </Switch>
    );


}


export default Main;