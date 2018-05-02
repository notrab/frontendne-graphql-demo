import React, { Component } from 'react'
import { Container, List, Image, Loader } from 'semantic-ui-react'

class App extends Component {
  state = {
    loading: true,
    faces: []
  }

  componentDidMount() {
    fetch('http://localhost:3000?limit=15')
      .then(res => res.json())
      .then(faces => {
        this.setState({
          faces,
          loading: false
        })
      })
  }

  render() {
    const { loading, faces } = this.state

    return (
      <Container text>
        {loading ? (
          <Loader active />
        ) : (
          <List>
            {faces.map((face, index) => (
              <List.Item key={index}>
                <Image avatar src={face.photo} />
                <List.Content>
                  <List.Header>{face.name}</List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        )}
      </Container>
    )
  }
}

export default App
