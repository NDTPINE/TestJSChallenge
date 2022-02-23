import React,{useState,useEffect} from "react";
import './App.css';
import {FcLike} from 'react-icons/fc';
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BiMessageRoundedError} from 'react-icons/bi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";


function App() {
  const [users, setUsers] = useState([]);
  const [likedUser, setLikeUser] = useState([]);
  const [passUser, setPassUser] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [userFull, setUserFull] = useState([]);
  const [matchesUser,setMatchesUser] = useState([]);


	const getListUser = () =>{
		fetch("https://dummyapi.io/data/v1/user?limit=50",{
      headers:{
        "app-id":"62138e250a7852003c143087"}
      })
			.then((res) => res.json())
			.then((json) => {
				setUsers(json.data);
        
			});
	}

  
  const matcheUser = () => {
      console.log("matcheUser")
  }
  // Add user to 
  const handlePassUser = () => {
      console.log("passUser");
  }

  const handleLikedUser = () => {
      console.log("likedUser");
  }
  
	
return (
    <div className="App">
      
      
      <div>
      {getListUser()}
      <SimpleSlider listUser = {users} />
        
      </div>
      <div>
        <button><FcLike/> Liked</button>
        <button ><BsFillSuitHeartFill/> Discover</button>
        <button><BiMessageRoundedError/> Matches</button>
      </div>
    </div>
	);
}



export default App;
