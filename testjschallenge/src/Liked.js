import React from 'react';
import './Liked.css';
import { AiFillDelete } from 'react-icons/ai';
import deleteUser from './deleteUser'

const Liked = ({likedUser,setLikeUser}) => {
    const d = new Date().getFullYear();
    const handleDelete =(us)=>{
        const urlLikeUser = 'http://localhost:3001/like';
        const tempUser = likedUser.splice(likedUser.indexOf(us,0),1);
        setLikeUser(likedUser);
        deleteUser(tempUser,urlLikeUser);
    }
    const tempLikedUser = likedUser.map((us) => 
        <div className='polaroid'>
            <img src={us.picture} alt='new'/>
            <p>{us.firstName} {us.lastName}, Age: {d - new Date(us.dateOfBirth).getFullYear()} 
            <button onClick={()=>handleDelete(us)}><AiFillDelete/></button>
            </p>
            
        </div>
    )
   
    return (
        <div className='polaroids'>
            {tempLikedUser}                     
        </div>
    
    )
}

export default Liked
