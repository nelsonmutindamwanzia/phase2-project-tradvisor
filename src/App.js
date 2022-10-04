import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import AddDestination from "./components/pages/AddDestination";
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
            <Route path="/add-destination" exact component = {AddDestination} ></Route>
          </Switch>
          <Footer />
        </Router>
    </>
  )
}

export default App;