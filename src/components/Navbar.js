    // .......Function Based Components......

import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
 <div className="container-fluid">
   <a className="navbar-brand" href="/"><h1>{props.title}</h1></a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button> 
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <h5><a className="nav-link active" aria-current="page" href="/">Home</a></h5>
       </li>
       <li className="nav-item">
         <h5><a className="nav-link" href="/">{props.aboutText}</a></h5>
       </li>
       <li className="nav-item">
         <h5><a className="nav-link disabled">Disabled</a></h5>
       </li>
     </ul>
     {/* <form className="d-flex" role="search">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
       <button className="btn btn-outline-primary" type="submit">Search</button>
     </form> */}
     <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} Mode</label>
    </div>
   </div>
 </div>
</nav>
</>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Title",
    aboutText: "About"
}