import React, {useState} from "react";
import Slider from "react-slick";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BsFillSuitHeartFill} from 'react-icons/bs';


function SimpleSlider({listUser}) {
    
    const d = new Date().getFullYear();
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
    const handleLike = () =>{
      console.log("Click like");
    }

    const handlePass = () =>{
      console.log("Click pass User");
    }
    return (
      <Slider {...settings} >
         {listUser.map((pic) => {
           return(
             <div key={pic.id}>
              <img src={pic.picture} alt="new" width="25%" />
              
              <label>{pic.firstName} {pic.lastName}, {d - new Date(pic.dateOfBirth).getFullYear()}</label>
              
              <div>
                <button type="button" onClick={() => handlePass()}><AiOutlineCloseCircle/></button>
                <button type="button" onClick={() => handleLike()}><BsFillSuitHeartFill/></button>
              </div>
             </div>
            
             )
         })}
      </Slider>
    );
  }

  export default SimpleSlider