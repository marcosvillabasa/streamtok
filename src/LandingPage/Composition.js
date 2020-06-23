import React from "react"
import styled from "styled-components"
import { StyledNavLink } from "../Components/NavLink"
import composition1 from "../assets/composition1.png"
import composition2 from "../assets/composition2.png"
import composition3 from "../assets/composition3.png"
import composition4 from "../assets/composition4.png"
import composition5 from "../assets/composition5.png"
import composition6 from "../assets/composition6.png"
import composition7 from "../assets/composition7.png"
import composition8 from "../assets/composition8.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { RoundedPrimaryButton } from "../Components/Buttons"
import { Link, useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Box = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 380px;
  background-color: #202124;
  padding-top: 420px;
  margin-top: -120px;

  .composition-carrousel-slider {
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const Box2 = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  justify-content: center;
`

const Navbar = styled.nav`
  margin-bottom: 60px;
  border-bottom: 1px solid grey;
  ul {
    display: flex;
    justify-content: center;

    li {
      padding: 0 1em;
    }
  }
`

const BackgroundText = styled.p`
  color: #202124;
  white-space: nowrap;
  position: absolute;
  letter-spacing: 0.3em;
  font-weight: 600;
  font-size: 120px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  opacity: 0.05;
  pointer-events: none;
  user-select: none;
  transform: translateY(-72px);
  will-change: font-size;

  &.bg-text-first {
    transform: translate(-1280px, -120px);
  }
  &.bg-text-second {
    transform: translate(200px, -120px);
  }
`

function Carrousel(props) {
  const ref = React.useRef(null)
  return (
    <Carousel
      ref={ref}
      arrows
      centerMode={false}
      className=""
      containerClass="image-composition-eventos"
      draggable={false}
      focusOnSelect={false}
      keyBoardControl={false}
      infinite
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
        },
        mobile: {
          breakpoint: {
            max: 600,
            min: 0,
          },
          items: 4,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 600,
          },
          items: 4,
        },
      }}
      sliderClass="composition-carrousel-slider"
      slidesToSlide={1}
      swipeable
    >
      {props.children}
    </Carousel>
  )
}

export default function Composition(props) {
  const location = useLocation()
  const [selected, setSelected] = React.useState("EVENTOS")
  const onClickLink = (event) => {
    if (event.target.dataset.tab) {
      setSelected(event.target.dataset.tab)
    }
  }
  return (
    <>
      <Box>
        <Navbar>
          <ul>
            <li>
              {/* <BackgroundText className="bg-text-first">
                CANALES VOD
              </BackgroundText> */}
              <StyledNavLink className="composition-links">
                <NavLink
                  to="#canales-vod"
                  isActive={() => location.hash.includes("canales-vod")}
                >
                  <span data-tab="CANALES VOD" onClick={onClickLink}>
                    CANALES VOD
                  </span>
                </NavLink>
              </StyledNavLink>
            </li>
            <li>
              {/* <BackgroundText className="bg-text-second">
                EVENTOS
              </BackgroundText> */}
              <StyledNavLink className="composition-links">
                <NavLink
                  to="#eventos"
                  isActive={() => location.hash.includes("eventos")}
                >
                  <span data-tab="EVENTOS" onClick={onClickLink}>
                    EVENTOS
                  </span>
                </NavLink>
              </StyledNavLink>
            </li>
          </ul>
        </Navbar>
        <Carrousel>
          {selected === "EVENTOS"
            ? [
                <Link to={"eventos/Lu7EC8Bf?v=MeVBP6Sg"}>
                  <img alt="imagen de recital" src={composition1} />
                </Link>,
                <Link to={"eventos/Lu7EC8Bf?v=1NC66zYE"}>
                  <img alt="imagen de recital" src={composition2} />
                </Link>,
                <img alt="imagen de recital" src={composition3} />,
                <img alt="imagen de recital" src={composition4} />,
              ]
            : [
                <Link to={"canales/lYq3t5Ce?v=Fy4NlMQt"}>
                  <img alt="imagen de recital" src={composition5} />
                </Link>,
                <Link to={"canales/Lu7EC8Bf?v=MeVBP6Sg"}>
                  <img alt="imagen de recital" src={composition6} />
                </Link>,
                <Link to={"canales/Lu7EC8Bf?v=MeVBP6Sg"}>
                  <img alt="imagen de recital" src={composition7} />
                </Link>,
                <Link to={"canales/Lu7EC8Bf?v=MeVBP6Sg"}>
                  <img alt="imagen de recital" src={composition8} />
                </Link>,
              ]}
        </Carrousel>
      </Box>
      <Box2>
        <RoundedPrimaryButton>VER TODO</RoundedPrimaryButton>
      </Box2>
    </>
  )
}
