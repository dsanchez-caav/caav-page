import React from "react";
import { Navbar } from "./Components";
import GlobalStyle from "./globlalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
