import React from "react"
import styled from "styled-components"
import { StyledLink, SelectedTabBorder } from "../Header/Menu"
import Link from "react-router-dom/Link"
import { useLocation } from "react-router"
import { RoundedPrimaryButton } from "./LandingPage"
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

const Box = styled.div`
  width: 100%;
  height: 380px;
  background-color: #202124;
  padding-top: 420px;
  margin-top: -120px;

  .composition-carrousel-slider {
    align-items: center;
  }
`

const Box2 = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
`

const Navbar = styled.nav`
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: center;

    li:first-child {
      margin-right: 4rem;
    }

    li {
      padding: 16px 32px;
      list-style: none;
    }
  }
`

function Carrousel(props) {
  const ref = React.useRef(null)
  return (
    <Carousel
      ref={ref}
      arrows
      centerMode={false}
      className="sdsd"
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
            max: 464,
            min: 0,
          },
          items: 4,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
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
              <StyledLink>
                <a>
                  <span data-tab="CANALES VOD" onClick={onClickLink}>
                    CANALES VOD
                  </span>
                  <SelectedTabBorder active={selected === "CANALES VOD"} />
                </a>
              </StyledLink>
            </li>
            <li>
              <StyledLink>
                <a>
                  <span data-tab="EVENTOS" onClick={onClickLink}>
                    EVENTOS
                  </span>
                  <SelectedTabBorder active={selected === "EVENTOS"} />
                </a>
              </StyledLink>
            </li>
          </ul>
        </Navbar>
        <Carrousel>
          {selected === "EVENTOS"
            ? [
                <img src={composition1}></img>,
                <img src={composition2}></img>,
                <img src={composition3}></img>,
                <img src={composition4}></img>,
              ]
            : [
                <img src={composition5}></img>,
                <img src={composition6}></img>,
                <img src={composition7}></img>,
                <img src={composition8}></img>,
              ]}
        </Carrousel>
      </Box>
      <Box2>
        <RoundedPrimaryButton>VER TODO</RoundedPrimaryButton>
      </Box2>
    </>
  )
}
