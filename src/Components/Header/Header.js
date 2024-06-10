import React, { useContext } from 'react';
import { useHistory ,Link} from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/firebaseContext';
function Header() {
  const history=useHistory()
  const {user}=useContext(AuthContext)
  const {firebase}= useContext(firebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <Link to="/login">
        <div className="loginPage">
          <span>{user?`  ${ user.displayName}`:'Login'}</span>
          <hr />
         
        </div>
        </Link>
        {user && <span
         onClick={()=>{
          firebase.auth().signOut();
          history.push("/login")
         }}
        >Logout</span>}
          <Link to="/create" >
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
          
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
            
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
