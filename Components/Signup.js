import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
  let history = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();
    const {name,email,password,cpassword} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        history.push("/");

    }
    else{
        alert("Invalid credentials");
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

    return (
      <div className="container w-75 p-3">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}> 
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" />
         
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={onChange} minLength={8} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirm_password" onChange={onChange} minLength={8} required/>
        </div>
       
        <button type="submit" className="btn btn-primary ">Submit</button>
      </form>
      </div>
    )
}

export default Signup