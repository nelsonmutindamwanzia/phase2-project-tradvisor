import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footer from './components/Footer';


function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component = {Home} ></Route>
            <Route path="/about" exact component = {About} ></Route>
            <Route path="/services" exact component = {Services} ></Route>
            <Route path="/sign-up" exact component = {SignUp} ></Route>
          </Switch>
          <Footer />
        </Router>
    </>
  )
}

export default App;