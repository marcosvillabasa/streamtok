import React from "react"
import styled from "styled-components"
import { HeadingWithFinalDot } from "../Components/HeadingWithFinalDot"

const StyledContactInformation = styled.section`
  text-align: left;
  font-size: var(--size-8);

  @media screen and (min-width: 1280px) {
    font-size: var(--size-5);
    address {
      margin-top: 40px;
    }
  }

  address {
    margin-top: 20px;
    p,
    a {
      display: block;
      color: var(--color-text-8);
      text-decoration: none;
      font-style: normal;
      line-height: 1.8em;
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
