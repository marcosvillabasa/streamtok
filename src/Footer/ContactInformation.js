import React from "react"
import styled from "styled-components"
import { HeadingWithFinalDot } from "../Components/HeadingWithFinalDot"
import strings from "../strings.json"

const StyledContactInformation = styled.section`
  text-align: left;

  address {
    margin-top: 1em;
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

const defaultData = {
  city: "city",
  address1: "address",
  zipcode: "zipcode",
  tel1: "tel1",
  fulltel1: "tel1",
  tel2: "tel2",
  fulltel2: "tel2",
  email: "email",
}

const contactData = strings.contact_data || defaultData

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
