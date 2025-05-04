import React from "react";
import Header_2 from "./components/header/header";
import Footer_2 from "./components/footer/footer";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Router_2 from "./Router/router";
 

function App() {

  return (
    <Router>
      <Header_2>
      </Header_2>
      <Router_2>
      </Router_2>
      <Footer_2>
      </Footer_2>
    </Router>
  )
}

export default App;