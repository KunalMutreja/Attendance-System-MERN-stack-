import React, { useState} from "react";
import UserDailydata from './UserDailydata'
import UserWeeklydata from './UserWeeklydata'
import UserMonthlydata from './UserMonthlydata'
const Userinfo = () => {

const [show, setShow] = useState("");
  return (
    <>
      <div  className="text-center">
         <button  className="btn btn-outline-danger container bg-light w-25 p-3 my-5 mx-4 mt-3  rounded border-danger" onClick={()=> setShow("showDailyAttendance")}>Daily Attendance</button>
         <button  className="btn btn-outline-danger container bg-light w-25 p-3 my-5 mx-4 mt-3  rounded border-danger" onClick={()=> setShow("showWeeklyAttendance")}>Weekly Attendance</button>
         <button  className="btn btn-outline-danger container bg-light w-25 p-3 my-5 mx-4 mt-3  rounded border-danger" onClick={()=> setShow("showMonthlyAttendance")}>Monthly Attendance</button>
      </div>
      <div >
        {show==="showDailyAttendance"  && <UserDailydata />}
        {show==="showWeeklyAttendance"  && <UserWeeklydata />}
        {show==="showMonthlyAttendance"  && <UserMonthlydata />}
      </div>
    </>
  )
}

export default Userinfo