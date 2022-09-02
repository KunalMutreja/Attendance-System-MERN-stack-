import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const UserDailydata = () => {
  const [data, setData] = useState([]);



  function getData() {
    axios
      .get("https://api")
      .then((res) => {
        setData(res.data);
      });
  }

 
  useEffect(() => {
    getData();
  }, []);

  return (
    <>   
    <br />
      <div className="text-center">
        <h2>Daily Attendance</h2>
      </div >
      <div className="text-center">
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Id</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Attendance</th>
            <th scope="col">Working Hours</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.date}</td>
                  <td>{eachData.time}</td>
                  <td>{eachData.attendance}</td>
                  <td>{eachData.workinghours}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      </div>
    </>
  );
};

export default UserDailydata;