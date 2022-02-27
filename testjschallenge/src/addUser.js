import apiRequest from "./apiRequest";

const addUser = async (Users, urlLiPa) => {
    const postOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(Users)
    }
    
    apiRequest(urlLiPa, postOptions);
    
}

export default addUser;