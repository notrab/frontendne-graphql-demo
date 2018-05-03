import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Feed from './Feed'
import Filter from './Filter'

class App extends Component {
  state = {
    limit: 10,
    offset: 0
  }

  _onChange = (e, data) => this.setState({ [data.name]: data.value })

  render() {
    return (
      <Container text>
        <Filter onChange={this._onChange} {...this.state} />
        <Divider />
        <Feed {...this.state} />
      </Container>
    )
  }
}

export default App
