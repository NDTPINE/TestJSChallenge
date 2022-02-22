import React from "react";
import './App.css';
import axios from "axios";


class App extends React.Component {

	// Constructor
	constructor() {
		super();
    
		this.state = {
			usersData: [],
      total: 0,
      page: 0,
      limit:0,
      userProfile:{}
		}
	}
  
	componentDidMount() {
		fetch("https://dummyapi.io/data/v1/user?limit=50",{
      headers:{
        "app-id":"62138e250a7852003c143087"}
      })
			.then((res) => res.json())
			.then((json) => {
				this.setState({usersData:json.data,total:json.total,page:json.page, limit:json.limit});
			})
	}

  GetFullUserProfile(id){
    var url="https://dummyapi.io/data/v1/user/"+id.toString();
    const fecthData = () =>{
      axios.get(url,{headers: {
        "app-id":"62138e250a7852003c143087"}
      })
      .then ((res)=> {
        this.setState({userProfile:res.data});
        console.log(res.data)
      })
      .catch((error) => console.log(error));
    }
    return (
      <label>{this.userProfile.id}</label>
    )   
    }

  ShowImage(str){
    return (
      <img s
      src= {str}
      alt="new"
      />
    );
  }

  renderUsers = () => { 
    let fullUser = this.state.users.map((d)=>
    <div>
        <p>{this.ShowImage(d.picture)}</p>
        <p>{d.id}</p>
        <p>{this.GetFullUserProfile(d.id)}</p>
    </div>
    ); 
    return fullUser; 
  }


	render() {
		return (
    <div className="App">
        {this.renderUsers}
    </div>
	);
}
}


export default App;
