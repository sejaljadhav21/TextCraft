import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          {/* <div className={`form-check form-switch mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <i className="bi bi-brightness-high-fill"></i>
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> 
          </div> */}
          <div className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <i
              className={`bi ${props.mode === 'dark' ? 'bi-brightness-high-fill' : 'bi-brightness-high'}`}
              style={{
                fontSize: '20px',
                cursor: 'pointer',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
              onClick={props.toggleMode}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.PropTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string
// }
Navbar.defaultProps = {
  title: "brand name",
  aboutText: "about brand"
}