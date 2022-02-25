import React from "react";
import Slider from "react-slick";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BsFillSuitHeartFill} from 'react-icons/bs';


function SimpleSlider({listUser, likedUser, setLikeUser,passUser, setPassUser}) {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" , width:"5%", height:"5%"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" ,width:"5%"}}
        onClick={onClick}
      />
    );
  }
    const d = new Date().getFullYear();
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
      
    };
    const handleLike = (users) =>{
      const tempUser = likedUser.includes(users);
      if (!tempUser){ likedUser.push(users)} 
      setLikeUser(likedUser);
      console.log(likedUser);
    }

    const handlePass = (users) =>{
      const tempUser = passUser.includes(users);
      if (!tempUser){ passUser.push(users)} 
      setLikeUser(passUser);
      console.log(passUser);
    }
    return (
      <div>
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
        </div>
    );
  }

  export default SimpleSlider