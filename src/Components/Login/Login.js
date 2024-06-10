import React, { useState,useContext } from 'react';
import { firebaseContext } from '../../store/firebaseContext';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const [email,setemail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState('');
  const {firebase}=useContext(firebaseContext)
  const history=useHistory()
  const handelLogin=(e)=>{
       e.preventDefault()

       if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }


       firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        history.push("/")
       }).catch((error)=>{
          alert(error.message)
       })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handelLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      <Link to="/signup">  <a>Signup</a></Link>
      </div>
    </div>
  );
}

export default Login;
