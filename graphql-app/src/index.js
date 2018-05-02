import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import './index.css'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
