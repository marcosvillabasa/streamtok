import React from "react"
import styled from "styled-components"
import { HeadingWithFinalDot } from "../Components/HeadingWithFinalDot"

const StyledContactInformation = styled.section`
  margin-right: 7vw;
  text-align: left;

  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }

  address {
    margin-top: 40px;
    p,
    a {
      display: block;
      color: inherit;
      text-decoration: none;
      font-style: normal;
      font-size: 2.4rem;
      line-height: 2em;
      font-family: "Open Sans", sans-serif;
    }
    a {
      color: var(--color-primary);
    }
  }
`
const contactData = {
  city: "Córdoba",
  address1: "Urquiza 459",
  tel1: "351 428 4047",
  fulltel1: "+543514284047",
  address2: "Humberto Primo 670",
  tel2: "351 431 8711",
  fulltel2: "+543514318711",
  email: "streamtok@gmail.com",
}

export default function ContactInformation() {
  return (
    <StyledContactInformation id="contact-information">
      <HeadingWithFinalDot>Datos de contacto</HeadingWithFinalDot>
      <address id="contact-data">
        <p title="Ciudad">{contactData.city}</p>
        <p title="Direccion">{contactData.address1}</p>
        <a title="Telefono" href={`tel:${contactData.fulltel1}`}>
          {contactData.tel1}
        </a>
        <p title="Direccion">{contactData.address2}</p>
        <a title="Telefono" href={`tel:${contactData.fulltel2}`}>
          {contactData.tel2}
        </a>
        <a title="Email" href={`mailto:${contactData.email}`}>
          {contactData.email}
        </a>
      </address>
    </StyledContactInformation>
  )
}
