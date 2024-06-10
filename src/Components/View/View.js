import React, { useEffect,useState,useContext } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { firebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetials,setUserdetials]=useState()
  const {postdetials}=useContext(PostContext)
  const {firebase}=useContext(firebaseContext)

  useEffect(()=>{
  const {userId}=postdetials
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(doc=> {
      setUserdetials(doc.data())
    });
  })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetials.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetials.price} </p>
          <span>{postdetials.name}</span>
          <p>{postdetials.category}</p>
          <span>{postdetials.createdAt}</span>
        </div>
       { userDetials &&(<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetials.username}</p>
          <p>{userDetials.phone}</p>
        </div>)}
      </div>
    </div>
  );
}
export default View;
