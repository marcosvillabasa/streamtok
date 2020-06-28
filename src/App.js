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
import { responseTransformer } from "./API/responseTransformer"

import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./configMaterialTheme"

const restLink = new RestLink({
  uri: "https://cdn.jwplayer.com/v2/",
  responseTransformer,
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
