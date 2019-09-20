import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import User from './User'

const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
    }
  }
`
class UserList extends Component {
  render() {
    return (
      <Query query={ USERS_QUERY }>
        {
          ({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            return (
              <div>
                { data.users.map(user => <User key={user.id} user={user} />) }
              </div>
            )
          }
        }
      </Query>
    )
  }
}

export default UserList