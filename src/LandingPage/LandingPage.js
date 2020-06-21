import React from "react"
import styled from "styled-components"
import AdBanner from "../Ads/AdBanner"
import Composition from "./Composition"
import CanalesGrid from "./CanalesGrid"
import { Hero } from "./HeroSection"
import { ScrollHelper } from "./ScrollHelper"

const StyledLandingPage = styled.div`
  .landing-bbcontainer {
    .react-multi-carousel-list {
      z-index: 1;
      margin: 0 2%;
    }
  }
`

// quick and diry way of changing the body class
function useBodyClass(classname) {
  React.useEffect(() => {
    document.body.classList.add(classname)
    return () => {
      document.body.classList.remove(classname)
    }
  })
}

export default function LandingPage(props) {
  useBodyClass("landing")
  return (
    <StyledLandingPage>
      <Hero />
      <div className="landing-bbcontainer">
        <AdBanner />
      </div>
      <ScrollHelper />
      {/* <Composition /> */}
      <CanalesGrid />
    </StyledLandingPage>
  )
}
