import React from "react"
import styled from "styled-components"
import { StyledNavLink } from "../Components/NavLink"
import bgtext1 from "../assets/canales-vod.svg"
import bgtext2 from "../assets/eventos.svg"
import composition5 from "../assets/composition5.png"
import composition6 from "../assets/composition6.png"
import composition7 from "../assets/composition7.png"
import composition8 from "../assets/composition8.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link, useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import AdBanner from "../Ads/AdBanner"
import { useDedupedQueryCanal } from "../API/Queries/QueryCanal"
import Tooltip from "@material-ui/core/Tooltip"
import { CustomTooltip } from "../Components/CustomTooltip"

const Box = styled.div`
  border-radius: 10px;
  background-color: #202124;
  margin-top: 120px;
  margin-bottom: 48px;

  .composition-carrousel-items {
    transform: scale(0.9);
  }

  @media screen and (min-width: 600px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  .landing-bbcontainer {
    transform: translateY(-50%);
    .react-multi-carousel-list {
      z-index: 1;
      margin: 0 2%;
    }
  }

  .composition-carrousel-slider {
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const Navbar = styled.nav`
  position: relative;
  margin-bottom: 60px;
  border-bottom: 1px solid grey;
  font-size: var(--size-12);

  .bg-text-container {
    height: 1.2em;
    display: flex;

    @media screen and (min-width: 600px) {
      height: 2em;
    }

    @media screen and (min-width: 1280px) {
      height: 2.5em;
    }

    .bg-text-subcontainer {
      width: 50%;
      position: relative;
    }
  }

  .bgtext-1,
  .bgtext-2 {
    flex-basis: 1em;
    width: auto;
    position: absolute;
    top: -1ch;
    height: 100%;
    width: auto;
  }

  .bgtext-1 {
    right: 0ch;
  }

  .bgtext-2 {
    left: 4ch;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      padding: 0 2%;
      @media screen and (min-width: 600px) {
        padding: 0 4%;
      }
    }
  }
`

function Carrousel(props) {
  const ref = React.useRef(null)
  console.log(ref?.current?.listRef?.current)
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
      sliderClass="composition-carrousel-slider h-swipe"
      slidesToSlide={1}
      swipeable
      itemClass="composition-carrousel-items"
    >
      {props.children}
    </Carousel>
  )
}

function CompositionItem({ track }) {
  return (
    <Tooltip
      title={
        <CustomTooltip>
          <div className="description">{track.description}</div>
          <div className="tags">{track.tags}</div>
        </CustomTooltip>
      }
    >
      <Link to={`eventos/${track.feedid}?v=${track.mediaid}`}>
        <img alt={track.title} src={track.image} />
      </Link>
    </Tooltip>
  )
}

export default function Composition(props) {
  const { loading, error, data: eventosList } = useDedupedQueryCanal("Lu7EC8Bf")

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
        <div className="landing-bbcontainer">
          <AdBanner />
        </div>
        <Navbar ref={props.scrollTo}>
          <div className="bg-text-container">
            <div className="bg-text-subcontainer">
              <img src={bgtext1} alt="canales vod" className="bgtext-1" />
            </div>
            <div className="bg-text-subcontainer">
              <img src={bgtext2} alt="eventos" className="bgtext-2" />
            </div>
          </div>
          <ul>
            <li>
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
        <Carrousel key={selected}>
          {selected === "EVENTOS"
            ? eventosList.playlist.map((track) => (
                <CompositionItem track={track} key={track.mediaid} />
              ))
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
    </>
  )
}
