import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Profile from './Profile'

const USERS_QUERY = gql`
  query {
    profiles {
      profileID
      uid
      name
      email
      description
      birthDate
    }
  }
`
class ProfileList extends Component {
  render() {
    return (
      <Query query={ USERS_QUERY }>
        {
          ({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            return (
              <div>
                { data.profiles.map(profile => <Profile key={profile.profileID} profile={profile} />) }
              </div>
            )
          }
        }
      </Query>
    )
  }
}

export default ProfileList