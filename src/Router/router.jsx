import React from "react";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

import Home from "../components/main/Home";

import About from "../components/main/About";
import Contact from "../components/main/Contact";
import Quiz from "../components/main/quiz";

import Cards from "../components/main/Cards";
import Magazin from "../components/main/magazin";


function Router_2(){
    return(
        <main>
            <Routes>
                <Route path="/"    element={<Home/>}></Route>
                <Route path="/about"    element={<About/>}></Route>
                <Route path="/contact"    element={<Contact/>}></Route>
                <Route path="/quiz"    element={<Quiz/>}></Route>

                <Route path="/cards"    element={<Cards/>}></Route>
                <Route path="/magazin"    element={<Magazin/>}></Route>
            </Routes>  
        </main>
      
    )
}
export default Router_2;