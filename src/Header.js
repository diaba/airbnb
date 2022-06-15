import  React from 'react';
import logo from './images/airbnb.png';

export default function Header(){
    return(
        <nav className="nav">
             <img src={logo} alt="airbnb"></img>
        </nav>
    )
}
