import React from "react";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
function Header_2(){
    return(
        <>
             <header className="header">
                <Link to='/'> Home page </Link>
                <Link to='/about'> About page </Link>
                <Link to='/contact'> Contact page </Link>
                <Link to='/quiz'> quiz page </Link>
                <Link to='/cards'> cards page </Link>
                <Link to='/magazin'> magazin  page </Link>

            </header>
      
        </>
    )
}
export default Header_2;