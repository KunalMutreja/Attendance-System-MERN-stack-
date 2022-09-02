import React from 'react';
import { Link } from 'react-router-dom';
import useGeoLocation from './useGeolocation';
export const Home = () => {

    const location = useGeoLocation();
    return (


        <div className="text-center">
            
            <Link className="btn btn-outline-danger container bg-light w-25 p-5 my-5 mx-4 mt-5  rounded border-danger" to="/facialattendance" role="button"  ><i className="fa-solid fa-camera mx-2 fa-3x"></i>
            </Link>
            <Link className=" btn btn-outline-danger container bg-light w-25 p-5 my-5 mx-4 mt-5 rounded border-danger" to="/biometric" role="button" > <i className="fa-solid fa-fingerprint mx-2 fa-3x"></i>
            </Link>
            <Link className=" btn btn-outline-danger container bg-light w-25 p-5 my-5 mx-4 mt-5 rounded border-danger" to="/userinfo" role="button" > <i className="fa-solid fa-circle-info mx-2 fa-3x"></i>
            </Link>

            <br />
            {location.loaded ? JSON.stringify(location) : "Loaction Details not available yet"}
        </div>


    )
}
export default Home;