import React from "react"
import styled from "styled-components"
import SocialMediaLinks from "./SocialMediaLinks"
import ContactInformation from "./ContactInformation"
import AboutInformation from "./AboutInformation"

const StyledFooter = styled.footer`
  color: white;
  padding: 100px var(--body-margin);
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    section {
      margin-bottom: 80px;
    }
  }
`

export default function Footer(props) {
  return (
    <StyledFooter>
      <AboutInformation />
      <ContactInformation />
      <SocialMediaLinks />
    </StyledFooter>
  )
}
