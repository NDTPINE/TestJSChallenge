import React, {useState} from "react";
import Slider from "react-slick";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BsFillSuitHeartFill} from 'react-icons/bs';


function SimpleSlider({listUser}) {
    const [userFull, setUserFull] = useState([]);
    const d = new Date().getFullYear();
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
    const getUserProfileById = () =>{
      listUser.map((us) =>{
        var url="https://dummyapi.io/data/v1/user/"+us.id.toString();
        fetch(url,{headers: {
            "app-id":"62138e250a7852003c143087"}
          })
          .then ((res)=> res.json())
          .then ((json) =>
           {
             userFull.push(json);
             setUserFull(userFull);
          })
          .catch((error) => console.log(error));
      }
      )
    }

    return (
      <Slider {...settings} >
        {getUserProfileById()}
         {userFull.map((pic) => {
           return(
             <div >
              <img src={pic.picture} alt="new" width="25%" />
              
              <label>{pic.firstName} {pic.lastName}, {d - new Date(pic.dateOfBirth).getFullYear()}</label>
              
              <div>
                <button ><AiOutlineCloseCircle/></button>
                <button ><BsFillSuitHeartFill/></button>
              </div>
             </div>
            
             )
         })}
      </Slider>
    );
  }

  export default SimpleSlider