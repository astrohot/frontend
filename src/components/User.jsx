import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.user.name} ({this.props.user.email})</p>
        </div>
      </div>
    )
  }
}

export default User