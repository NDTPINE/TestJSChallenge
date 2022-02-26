import apiRequest from "./apiRequest";

const addUser = async (likedUser, urlLiPa) => {
    const postOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(likedUser)
    }
    
    apiRequest(urlLiPa, postOptions);
    
}

export default addUser;