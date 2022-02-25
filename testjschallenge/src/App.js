import React,{useState,useEffect} from "react";
import './App.css';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BiMessageRoundedError} from 'react-icons/bi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
import Discover from "./Discover";
import Liked from "./Liked";
import Matches from "./Matches";



function App() {
  const [listUsers, setListUsers] = useState([]);
  const [likedUser, setLikeUser] = useState([]);
  const [passUser,setPassUser] = useState([]);

  const API_URL = "http://localhost:3001/data";
  useEffect(() =>{
    const fetchUsers = async () =>{
       //Fetch data database (json)
         try{
           const res = await fetch(API_URL);
           if (!res.ok) throw Error('Can not load database from server')
           const listUser = await res.json();
           setListUsers(listUser);
         }
         catch (err){
           console.log(err.stack);
         }
      //Fetch data from https://dummyapi.io
     /* try{
        const res = fetch("https://dummyapi.io/data/v1/user?limit=20",{
          headers:{
            "app-id":"62138e250a7852003c143087"}
          })
          .then((resp) => resp.json())
          .then((data) =>{
            data.data.map((us) =>{
              const url="https://dummyapi.io/data/v1/user/"+us.id.toString();
              fetch(url,{headers: {
              "app-id":"62138e250a7852003c143087"}
              })
              .then ((response) => response.json())
              .then ((json) => {
                listUsers.push(json);
                setUsers(listUsers);
              })
            })
          }) 
          console.log(listUsers);         
      }
      catch(err){
        console.log(err.stack);
      } */
    }
    (async () =>await fetchUsers())();
  }, [])
  
  
return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <SimpleSlider 
          listUser = {listUsers} 
            likedUser = {likedUser}
            setLikeUser = {setLikeUser}
            passUser={passUser}
            setPassUser={setPassUser}
          />
        }/> 
        <Route path="/discover" element={
          <Discover listUser = {listUsers} 
           likedUser = {likedUser}
           setLikeUser = {setLikeUser}
           passUser={passUser}
           setPassUser={setPassUser}
          />
        }/>
        <Route path="/like" element={
          <Liked 
          listUser ={listUsers}
          />
        }/>
        <Route path="/matches" element={
          <Matches />
        }/>
            
      </Routes>
      </BrowserRouter>
      <div className="btn">
        <button className="buttonLDM" ><BsFillSuitHeartFill/> Liked</button>
        
        <Link to="/">
            <button className="buttonLDM" ><BsFillSuitHeartFill/> Discover</button>
        </Link>

        <button className="buttonLDM" ><BiMessageRoundedError/> Matches</button>
      </div>
    </div>
	);
}



export default App;
