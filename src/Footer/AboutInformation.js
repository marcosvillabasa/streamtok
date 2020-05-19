import React from "react"
import styled from "styled-components"
import logo from "../assets/logo"

export default function AboutInformation() {
  return (
    <section>
      <div>{logo}</div>
      <p style={{marginTop:'1.5rem'}}>
        Streamtok es una empresa de entretenimiento que opera a nivel nacional,
        cuyo servicio principal es la transmisión de Live Streaming de
        contenidos audiovisuales.
      </p>
    </section>
  )
}
