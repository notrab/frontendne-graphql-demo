import React from 'react'
import { Query } from 'react-apollo'
import { Loader, List, Image } from 'semantic-ui-react'
import gql from 'graphql-tag'

const QUERY = gql`
  query getFaces($limit: Int, $offset: Int) {
    faces(limit: $limit, offset: $offset) {
      name
      photo
    }
  }
`

const Feed = ({ limit, offset }) => (
  <Query query={QUERY} variables={{ limit, offset }}>
    {({ data, error, loading }) => {
      if (error) return <p>Error</p>
      if (loading) return <Loader active />

      return (
        <List>
          {data.faces.map(face => (
            <List.Item key={face.photo}>
              <Image avatar src={face.photo} />
              <List.Content>
                <List.Header>{face.name}</List.Header>
              </List.Content>
            </List.Item>
          ))}
        </List>
      )
    }}
  </Query>
)

export default Feed
