// import logo from './logo.svg';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';

function App() {
  return (
    <>
    <Navbar title="Textos" aboutText="About Us"/>
    <div className="container my-3"><TextForm heading="Enter the text to Analyse Below"/></div>
    {/* <About/> */}
    </> 
  );
}

export default App;
