import React from "react"
import styled from "styled-components"
import { HeadingWithFinalDot } from "../Components/HeadingWithFinalDot"

const ContactoForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: stretch;
  justify-content: stretch;

  margin-left: 5%;
  width: 90%;
  max-width: 600px;
  color: var(--color-text-10);
  font-size: 12px;

  @media screen and (min-width: 600px) {
    font-size: 14px;
  }

  textarea,
  input {
    text-align: left;
    margin: 0.25em 0em;
    padding: 0.6em 1.2em;
    font-size: inherit;
    background-color: var(--color-text-1);
    color: inherit;
    border: 1px solid var(--color-text-2);
    border-radius: 5px;
  }

  .form-label {
    text-align: left;
    margin-top: 0.75em;
    &::after {
      content: "*";
      color: red;
      margin-left: 1ch;
    }
  }

  .submit-btn {
    margin-top: 3em;
    align-self: flex-start;
    padding: 0.6em 2em 0.5em 2em;
  }
`

export default function ContactInformation() {
  return (
    <ContactoForm>
      <HeadingWithFinalDot>Contactanos</HeadingWithFinalDot>
      <label required htmlFor="nombre" className="form-label">
        Nombre
      </label>
      <input type="text" name="nombre" id="nombre" />
      <label required htmlFor="email" className="form-label">
        Email
      </label>
      <input type="email" name="email" id="email" />
      <label required htmlFor="mensaje" className="form-label">
        Mensaje
      </label>
      <textarea name="mensaje" id="mensaje" cols="30" rows="6"></textarea>
      <input className="submit-btn" type="submit" value="Enviar" />
    </ContactoForm>
  )
}
