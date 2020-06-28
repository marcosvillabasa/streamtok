import React from "react"
import styled from "styled-components"
import { StyledNavLink } from "../Components/NavLink"
import bgtext1 from "../assets/canales-vod.svg"
import bgtext2 from "../assets/eventos.svg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom"
import AdBanner from "../Ads/AdBanner"
import { useDedupedQueryCanal } from "../API/Queries/QueryCanal"
import Tooltip from "@material-ui/core/Tooltip"
import { CustomTooltip } from "../Components/CustomTooltip"
import { useQuery } from "react-apollo"
import { QueryCanal } from "../API/Queries/QueryCanal"

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
  return (
    <Carousel
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
          items: 2,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 600,
          },
          items: 3,
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
          <div className="title">{track.title}</div>
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
  const { data: eventosList } = useDedupedQueryCanal("Lu7EC8Bf")

  useQuery(QueryCanal, {
    variables: { playlistId: "lYq3t5Ce" },
    onCompleted: (data) => {
      try {
        const len = data.response.playlist.length
        const item1 = data.response.playlist[~~(Math.random() * len)]
        const item2 = data.response.playlist[~~(Math.random() * len)]
        setCanalesTrack((canales) => canales.concat([item1, item2]))
      } catch (error) {
        console.log(error)
      }
    },
  })

  useQuery(QueryCanal, {
    variables: { playlistId: "PtGHPJyX" },
    onCompleted: (data) => {
      try {
        const len = data.response.playlist.length
        const item1 = data.response.playlist[~~(Math.random() * len)]
        const item2 = data.response.playlist[~~(Math.random() * len)]
        setCanalesTrack((canales) => canales.concat([item1, item2]))
      } catch (error) {
        console.log(error)
      }
    },
  })

  useQuery(QueryCanal, {
    variables: { playlistId: "S5VL1ucU" },
    onCompleted: (data) => {
      try {
        const len = data.response.playlist.length
        const item1 = data.response.playlist[~~(Math.random() * len)]
        setCanalesTrack((canales) => canales.concat(item1))
      } catch (error) {
        console.log(error)
      }
    },
  })

  useQuery(QueryCanal, {
    variables: { playlistId: "VFQ4soKc" },
    onCompleted: (data) => {
      try {
        const len = data.response.playlist.length
        const item1 = data.response.playlist[~~(Math.random() * len)]
        setCanalesTrack((canales) => canales.concat(item1))
      } catch (error) {
        console.log(error)
      }
    },
  })

  const [canalesTracks, setCanalesTrack] = React.useState([])

  const [selected, setSelected] = React.useState("eventos")
  const onClickLink = (event) => {
    if (event.target.dataset.tab) {
      setSelected(event.target.dataset.tab)
    }
  }
  return (
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
              <div
                className={`tab ${
                  selected === "canales" ? "active" : "inactive"
                }`}
              >
                <span data-tab="canales" onClick={onClickLink}>
                  CANALES VOD
                </span>
              </div>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink className="composition-links">
              <div
                className={`tab ${
                  selected === "eventos" ? "active" : "inactive"
                }`}
              >
                <span data-tab="eventos" onClick={onClickLink}>
                  EVENTOS
                </span>
              </div>
            </StyledNavLink>
          </li>
        </ul>
      </Navbar>
      <Carrousel key={selected}>
        {selected === "eventos"
          ? eventosList.playlist.map((track) => (
              <CompositionItem track={track} key={track.mediaid} />
            ))
          : canalesTracks.map((track) => (
              <CompositionItem track={track} key={track.mediaid} />
            ))}
      </Carrousel>
    </Box>
  )
}
