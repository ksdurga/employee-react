import React, { Component } from "react";
import API from "./utils/API";


class About extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.users();
  }

  users = () => {
    API.users()
    
    // .then(res=>console.log(res.data.results))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Employee Tracker</h1>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label for="search">Search</label>
              <input type="search" className="form-control" id="search" placeholder="Search for employee by last name here"/>
            </div>
          </form>
            <ul className='list-group'>
              {this.state.results.map(user =>
              <li className='list-group-item' key={user.id.value}><img alt={user.name.last} src={user.picture.medium}/> &nbsp; {user.name.last}, &nbsp; {user.name.first} &nbsp; {user.email}</li>
              )}
              
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default About;
