// import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#797F8C'; //#042743
    showAlert("Dark Mode has been enabled", "success");
  }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textos" mode={mode} aboutText="About Us" toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"  mode={mode}>
    <Switch>
        <Route exact path="/about" component={About} mode={mode} />
        <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to Analyse Below"/>
        </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
