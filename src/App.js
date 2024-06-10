import React, { useEffect,useContext } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext,firebaseContext } from './store/firebaseContext';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';



function App() {
  const {setuser}=useContext(AuthContext)
  const {firebase}=useContext(firebaseContext)
useEffect(()=>{
 firebase.auth().onAuthStateChanged((user)=>{
  setuser(user)
 })
})
  return (
    <div>
      <Post>
      <Router >
        <Route exact path="/"><Home /></Route>
        <Route path="/signup"><Signup /></Route> 
        <Route path="/login"><Login /></Route> 
        <Route path="/create"><Create /></Route> 
        <Route path="/View"><ViewPost /></Route> 
      </Router>
      </Post>
    </div>
  );
}

export default App;
