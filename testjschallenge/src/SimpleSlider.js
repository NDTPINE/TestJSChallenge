import React from "react";
import Slider from "react-slick";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BsFillSuitHeartFill} from 'react-icons/bs';
import addUser from "./addUser";

function SimpleSlider({listUser, likedUser, setLikeUser,passUser, setPassUser}) {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" , width:"7%", height:"5%"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" ,width:"7%",height:"5%"}}
        onClick={onClick}
      ></div>
    );
  }
    const d = new Date().getFullYear();
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay: true,
      autoplaySpeed: 1500,
      cssEase: "linear",
      prevArrow:<SamplePrevArrow/>,
      nextArrow:<SampleNextArrow/>
      
    };
    const handleLike = (users) =>{
      const tempUser = likedUser.includes(users);
      if (!tempUser){ 
        likedUser.push(users);
        addUser(users,'http://localhost:3001/like');
      }
      setLikeUser(likedUser);
      
    }

    const handlePass = (users) =>{
      const tempUser = passUser.includes(users);
      if (!tempUser){ 
        passUser.push(users)
        addUser(users,'http://localhost:3001/pass');
      } 
      setPassUser(passUser);
    }
    const listImage =() =>{
      return (
        <Slider {...settings} >
         {listUser.map((pic) => {
           return(
             <div key={pic.id}>
              <img className="imageSlider" src={pic.picture} alt="new" width="25%" ></img>
              <label >{pic.firstName} {pic.lastName}, Age: {d - new Date(pic.dateOfBirth).getFullYear()} </label>
              <div>
                <button className="btnLikePass" type="button" onClick={() =>handlePass(pic)}><AiOutlineCloseCircle/></button>
                <button className="btnLikePass" type="button" onClick={() => handleLike(pic)}><BsFillSuitHeartFill/></button>
              </div>
             </div>
            )
          })}
      </Slider>
      )
    }
    return (
      <div>
      {listImage()}
        </div>
    );
  }

  export default SimpleSlider