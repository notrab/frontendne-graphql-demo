import React from 'react'
import { Container, List, Image, Loader } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const QUERY = gql`
  query {
    faces(limit: 15) {
      name
      photo
    }
  }
`

const App = () => (
  <Container text>
    <Query query={QUERY}>
      {({ data, error, loading }) => {
        if (error) return <p>Error</p>
        if (loading) return <Loader active />

        return (
          <List>
            {data.faces.map((face, index) => (
              <List.Item key={index}>
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
  </Container>
)

export default App
