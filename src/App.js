import React from "react"
import "./App.css"
import Menu from "./Header/Menu"
import Footer from "./Footer/Footer"
import MainBody from "./MainBody"
import { BrowserRouter as Router } from "react-router-dom"
import { Helmet } from "react-helmet"

import { ApolloProvider } from "react-apollo"
import { client } from "./configApolloClient"

import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./configMaterialTheme"

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
