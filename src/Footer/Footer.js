import React from "react"
import styled from "styled-components"
import SocialMediaLinks from "./SocialMediaLinks"
import ContactInformation from "./ContactInformation"
import AboutInformation from "./AboutInformation"
import Grid from "@material-ui/core/Grid"

const StyledFooter = styled.footer`
  color: white;
  padding: 96px 16px;
  section {
    margin-bottom: 48px;
  }

  font-size: var(--size-5);

  * {
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    padding-left: 15%;
    padding-right: 15%;
  }

  @media screen and (min-width: 960px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    * {
      text-align: inherit;
    }
    section {
      margin-bottom: 0px;
    }
  }
`

export default function Footer(props) {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <AboutInformation />
        </Grid>
        <Grid item xs={12} md={6} lg>
          <ContactInformation />
        </Grid>
        <Grid item xs={12} md={6} lg="auto">
          <SocialMediaLinks />
        </Grid>
      </Grid>
    </StyledFooter>
  )
}
