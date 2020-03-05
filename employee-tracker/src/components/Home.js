import React, { Component } from "react";
import API from "./utils/API";
// import SearchForm from "./Search";


class About extends Component {
  //set initial state
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.users();
  };

  //gets api data
  users = () => {
    API.users()
    
    // .then(res=>console.log(res.data.results))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  //sets state of search to the target valiue
  updateSearch(event) {
    const name = event.target.name;
    const value = event.target.value;
    //key of value is name
    this.setState({
      [name]: value
    });
  };


  render() {
    //filters users
    let filteredUsers = this.state.results.filter(
      (user) => {
        return user.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
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
                <label htmlFor="search">Search:</label>
                <input
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Search for an employee by last name"
                  id="search"
                  onChange={this.updateSearch.bind(this)}
                  value={this.state.search}
                />
              </div>
            </form>
            <ul className='list-group'>
              {filteredUsers.map(user =>
              <li className='list-group-item' key={user.login.uuid}><img alt={user.name.last} src={user.picture.medium}/> &nbsp; {user.name.last}, &nbsp; {user.name.first} &nbsp; {user.email}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default About;
