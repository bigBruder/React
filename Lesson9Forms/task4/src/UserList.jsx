import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
 
    state = {
    filterText: '',
    };
  

  // handleChange = e => {
  //   const { name, value, checked, type } = e.target;

  //   const val = type === 'checkbox' ? checked : value;

  //   this.setState({
  //     [name]: val,
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state);
  // };

  usersList = this.props.users;

  render() {
const filteredUsers = this.props.users.filter()


    return (
      <>
      <Filter filterText={this.state.filterText} count='1' onChange={}/>
      {filteredUsers.map <User key={user.id} name={} age={}/>}
      </>
    );
  }
}
export default UserList;
