import React from "react"
import styled from "styled-components"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import placeholder from "../assets/180x180.gif"
import { Banner } from "../Components/Banner"

// TODO: SACAR NARANJA PONER PLACEHOLDER !!
const BannerItems = [
  { src: placeholder },
  { src: placeholder },
  { src: placeholder },
  { src: placeholder },
  { src: placeholder },
  { src: placeholder },
]

const CarrouselContainer = styled.div`
  overflow: visible;
  position: relative;
  max-width: 1400px;
  margin: 0 auto 80px auto;

  @media screen and (min-width: 960px) {
    padding: 0 5%;
  }

  .container {
    /* border-radius goes here instead of going in the item (banner in this case) */
    /* because the border-radius needs to be applied during the slide transition too */
    border-radius: 16px;
  }

  .carrousel-dots {
    /* in the original component class this class has position absolute */
    bottom: -40px;
    .react-multi-carousel-dot {
      button {
        /* overrides to the original dot styles */
        width: 12px;
        height: 12px;
        background-color: #fff4;
        transition: none;
        border: none;
        margin-right: 2vw;
        box-shadow: 0px 0px 4px 0px #fff4;
        transition: 0.4s ease-out;
        will-change: background-color, transform, box-shadow;
      }

      &.react-multi-carousel-dot--active {
        button {
          background-color: var(--color-primary);
          transform: scale(1.8);
          box-shadow: 0px 0px 8px 0px var(--color-primary);
        }
      }
    }
  }
`

export default function AdBanner() {
  return (
    <CarrouselContainer>
      <Carousel
        showDots
        renderDotsOutside
        dotListClass="carrousel-dots"
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container h-swipe"
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass="add-carrousel-item"
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
        {BannerItems.map((img) => (
          <Banner img={img} />
        ))}
      </Carousel>
    </CarrouselContainer>
  )
}
