import React from "react"
import styled from "styled-components"
import SocialMediaLinks from "./SocialMediaLinks"
import ContactInformation from "./ContactInformation"
import AboutInformation from "./AboutInformation"

const StyledFooter = styled.footer`
  color: white;
  padding: 100px 7vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #101114;
`

export const FooterTitle = styled.p`
  width: max-content;
  font-size: 28px;
  font-family: "Open Sans", sans-serif;
  line-height: 38px;
  letter-spacing: 2.8px;
  span {
    color: red;
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
