// src/gatsby-theme-apollo/client.js
import fetch from 'isomorphic-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:1337',
    fetch,
  }),
})

export default client
