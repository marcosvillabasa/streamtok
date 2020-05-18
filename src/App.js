import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Menu from "./Header/Menu"
import Footer from "./Footer/Footer"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import MainBody from "./MainBody"

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
