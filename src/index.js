import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar.js';
import BarCard from './components/BarCard.js';
import ContainerPublic from './components/ContainerPublic';
import Publicaciones from './components/Publicaciones.js'

ReactDOM.render(
  <React.StrictMode>

    <NavBar/>
    <BarCard></BarCard>
    <ContainerPublic></ContainerPublic>
    <Publicaciones></Publicaciones>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
