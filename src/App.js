// import logo from './logo.svg';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#797F8C';//#042743
  }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="Textos" mode={mode} aboutText="About Us" toggleMode = {toggleMode}/>
    <div className="container my-3" mode={mode}><TextForm heading="Enter the text to Analyse Below"/></div>
    {/* <About/> */}
    </> 
  );
}

export default App;
