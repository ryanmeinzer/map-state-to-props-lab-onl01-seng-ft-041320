import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          <ul>{users}</ul>
          {/* In addition, display the total number of users curently in the store */}
          <p>{this.props.totalUsers}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users, totalUsers: state.users.length }
}

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);