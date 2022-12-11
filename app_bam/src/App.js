import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Productos from './componentes/Productos';
import Titulo from './componentes/Titulo';
import Contactame from './componentes/Contactame';
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  
  return (
    <>
    <Navbar/>
    <Titulo/>

    <Router path="/productos" exact component={Productos} />
    <Router path="/sobremi" exact component={Titulo} />
    <Router path="/contactame" exact component={Contactame} />
    <Router path="/" exact component={App} />
  

    
    <Footer/> 
    </>


    );
}

export default App;