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

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const restLink = new RestLink({
  uri: "https://cdn.jwplayer.com/v2/",
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0d57",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
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
