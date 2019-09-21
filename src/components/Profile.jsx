import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.profile.name} ({this.props.profile.email})</p>
        </div>
      </div>
    )
  }
}

export default Profile