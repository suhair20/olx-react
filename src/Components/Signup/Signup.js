import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseContext } from '../../store/firebaseContext';

export default function Signup() {
 const history=useHistory()
 const [error,seterror]=useState('')
  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [Password,setPassword]=useState('')
  const {firebase}=useContext(firebaseContext)


  const handleSubmit=(e)=>{    
     e.preventDefault()

     if (!username || !email || !phone || !Password) {
      seterror('Please fill in all fields');
      return;
    }

     firebase.auth().createUserWithEmailAndPassword(email,Password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
         firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
         }).then(()=>{
          console.log('moidhee');
          history.push("/login")
         })
      })
     })

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        {error&&<p className='error'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
