const apiRequest = async(url ='', optionsObj = null, errMsg = null) =>{
    try {
        const res = await fetch(url, optionsObj)
        .then((res) =>res.json())
        .then(res=>{console.log('Response: ', res)});
        if (!res.ok) throw Error("Please reload the website!!!");

    }
    catch(err){
        errMsg = err.message;
    }
    finally {
        return errMsg;
    }
}

export default apiRequest;