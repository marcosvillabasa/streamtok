import React from "react"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import macro from "../assets/macro.png"
import naranja from "../assets/naranja.jpg"
import BannerIcon from "../assets/tools-and-utensils.svg"

const Banner = styled.div`
  background-image: linear-gradient(to right, #14474d, #1c4a7d);
  border-radius: 10px;
  padding: 35px 128px;
  display: flex;
  align-items: center;
  position: relative;

  .notice {
    margin-left: 48px;
    color: white;
    text-align: left;

    div:first-child {
      font-size: 23px;
      line-height: 47px;
      font-family: "Open Sans", sans-serif;
      height: 47px;
    }
    div:last-child {
      font-size: 35px;
      line-height: 47px;
      height: 47px;
      font-family: "Open Sans", sans-serif;
    }
  }

  button {
    margin-left: auto;
  }

  .banner-logo {
    height: 180px;
    width: auto;
  }

  .banner-icon {
    position: absolute;
    pointer-events: none;
    right: -30px;
    top: -30px;
    width: 280px;
    height: 320px;
  }
`

const Button = styled.button`
  z-index: 1;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid white;
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 1.68px;
  color: white;
  line-height: 32px;
  padding: 14px 40px;
  transition: 0.2s background-color, 0.3s border;

  &:hover {
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
`

export default function AdBanner(props) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      draggable={false}
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl={false}
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {[
        <Banner>
          <img className="banner-logo" src={macro}></img>
          <div className="notice">
            <div>Espacio disponible</div>
            <div>para publicitar</div>
          </div>
          <Button>CONTACTANOS</Button>
          <img className="banner-icon" src={BannerIcon}></img>
        </Banner>,
        <Banner>
          <img className="banner-logo" src={naranja}></img>
          <div className="notice">
            <div>Espacio disponible</div>
            <div>para publicitar</div>
          </div>
          <Button>CONTACTANOS</Button>
          <img className="banner-icon" src={BannerIcon}></img>
        </Banner>,
      ]}
    </Carousel>
  )
}
