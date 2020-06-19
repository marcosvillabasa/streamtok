import React from "react"
import styled from "styled-components"
import { HeadingWithFinalDot } from "../Components/HeadingWithFinalDot"

const StyledContactInformation = styled.section`
  margin-right: 7vw;
  text-align: left;

  @media screen and (max-width: 1280px) {
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
  city: "Córdoba. Argentina",
  address1: "Padre Luís Monti 1914",
  zipcode: "CP5000",
  tel1: "351 659 6749",
  fulltel1: "+543516596749",
  tel2: "351 881 4194",
  fulltel2: "+543518814194",
  email: "roman@streamtok.com",
}

export default function ContactInformation() {
  return (
    <StyledContactInformation id="contact-information">
      <HeadingWithFinalDot>Datos de contacto</HeadingWithFinalDot>
      <address id="contact-data">
        <p title="Direccion">{contactData.address1}</p>
        <p title="Ciudad">{contactData.city}</p>
        <p title="Zipcode">{contactData.zipcode}</p>
        <a title="Telefono" href={`tel:${contactData.fulltel1}`}>
          {contactData.tel1}
        </a>
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
