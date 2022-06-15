import  React from 'react';
import "./index.css";
import logo from './airbnb.png';

export default function Header(){
    return(
        <nav className="nav">
             <img src={logo} alt="airbnb"></img>
        </nav>
    )
}
