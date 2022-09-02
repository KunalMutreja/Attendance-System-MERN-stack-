import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Attendance</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Landing</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
        
        {/* <Link  className="btn btn-outline-success mx-2" to="/logintest" role="button">Login</Link> */}
        {/* <Link  className="btn btn-outline-success mx-2" to="/signup" role="button">Signup</Link> */}
         
        </form>
      </div>
    </div>
  </nav>
  )
}
