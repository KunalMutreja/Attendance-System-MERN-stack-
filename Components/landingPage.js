import React from 'react'
import { Link } from 'react-router-dom'
import "./landing.css"
const landingPage = () => {
  return (
    <>
    <div>
    <div className="d-flex back">
    <span className="dot  margin text-center container">
    <i className="fa-solid fa-user-group fa-3x mt-4"></i>
    <h2 className="marginText">Attendance Management System</h2>
    <Link  className="btn btn-danger button mx-2 mt-4" to="/login" role="button">Login</Link>
    <Link  className="btn btn-danger button mx-2 mt-4" to="/signup" role="button">Signup</Link>
     <br /><br /><br /><br /><br /><br />
   <h5 className="centered"><b>Facial and biometric attendance system using current geolocation of the user</b></h5>
     <img src="./images/attendanceimg.jpg" className="attendanceimg" alt=""></img>

    </span>
    <img src="./images/landingImage.jfif" className=" rounded image float-right" alt=""></img>
    </div>
    </div>
    </>
  )
}

export default landingPage