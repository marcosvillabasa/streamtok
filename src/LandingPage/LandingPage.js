import React from "react"
import Composition from "./Composition"
import CanalesGrid from "./CanalesGrid"
import { Hero } from "./HeroSection"

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
  const compositionRef = React.useRef(null)

  return (
    <div>
      <Hero scrollTo={compositionRef} />
      <Composition scrollTo={compositionRef} />
      <CanalesGrid />
    </div>
  )
}
