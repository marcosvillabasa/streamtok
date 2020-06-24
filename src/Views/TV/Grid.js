import React from "react"
import CanalesGrid from "../../LandingPage/CanalesGrid"
import { Helmet } from "react-helmet"

export default function Grid(props) {
  return (
    <>
      <Helmet>
        <title>StreamTOK [TV]</title>
      </Helmet>
      <CanalesGrid />
    </>
  )
}
