import React from "react"
import "./App.css"
import Menu from "./Header/Menu"
import Footer from "./Footer/Footer"
import MainBody from "./MainBody"
import { BrowserRouter as Router } from "react-router-dom"

import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"
import { RestLink } from "apollo-link-rest"
import { Helmet } from "react-helmet"

const restLink = new RestLink({
  uri: "https://cdn.jwplayer.com/v2/",
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Helmet>
        <title>StreamTOK</title>
      </Helmet>
      <Router>
        <Menu />
        <MainBody />
      </Router>
      <Footer />
    </ApolloProvider>
  )
}

export default App
