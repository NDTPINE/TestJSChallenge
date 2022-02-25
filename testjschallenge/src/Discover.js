import React from 'react'
import SimpleSlider from "./SimpleSlider";
import {Link} from 'react-router-dom';

const Discover = ({listUsers, likedUser, setLikeUser,passUser, setPassUser}) => {
    return (
        
    <div>
        <SimpleSlider 
            listUser = {listUsers} 
            likedUser = {likedUser}
            setLikeUser = {setLikeUser}
            passUser={passUser}
            setPassUser={setPassUser}
        />
      </div>
    )
}

export default Discover
