import React,{useState,useEffect} from "react";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import { Route, Routes} from 'react-router-dom';
import Discover from "./Discover";
import Liked from "./Liked";
import Matches from "./Matches";
import Layout from "./Layout";



function App() {
  const [listUsers, setListUsers] = useState([]);
  const [likedUser, setLikeUser] = useState([]);
  const [passUser,setPassUser] = useState([]);

  const API_URL_DATA = "http://localhost:3001/data";
  const API_URL_LIKE = "http://localhost:3001/like";
  const API_URL_PASS = "http://localhost:3001/pass";
  useEffect(() =>{
    const fetchUsers = async () =>{
       //Fetch data database (json)
         try{
           const res1 = await fetch(API_URL_DATA);
           if (!res1.ok) throw Error('Can not load database from server')
           const listUser = await res1.json();
           setListUsers(listUser);

           const res2 = await fetch(API_URL_LIKE);
           if (!res2.ok) throw Error('Can not load database like user from server')
           const listLikeUser = await res2.json();
           setLikeUser(listLikeUser);

           const res3 = await fetch(API_URL_PASS);
           if (!res3.ok) throw Error('Can not load database like user from server')
           const listPassUser = await res3.json();
           setPassUser(listPassUser);
         }
         catch (err){
           console.log(err.stack);
         }
    }
    setTimeout(()=>{
      (async () =>await fetchUsers())()
    },2000);
  }, [])
  
  
return (
      <div>
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route index element={<SimpleSlider
            listUser = {listUsers} 
            likedUser = {likedUser}
            setLikeUser = {setLikeUser}
            passUser={passUser}
            setPassUser={setPassUser}/>  
          }/>
          <Route path="discover" element={
            <Discover listUser = {listUsers} 
              likedUser = {likedUser}
              setLikeUser = {setLikeUser}
              passUser={passUser}
              setPassUser={setPassUser}
            />
            }/>
          <Route path="liked" element={
            <Liked 
              likedUser = {likedUser}
              setLikedUser ={setLikeUser}
            />
            }/>
          <Route path="matches" element={<Matches />
          }/>
        </Route>
      </Routes>
        
      </div>
	);
}



export default App;
