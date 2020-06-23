import React from "react"
import styled from "styled-components"
import { OutlinedButtonVariant2 } from "../Components/Buttons"
import BannerIcon from "../assets/tools-and-utensils.svg"

const StyledBanner = styled.div`
  padding: 2% 6%;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 360px) {
    padding: 2%;
  }

  background-image: linear-gradient(
    to right,
    var(--banner-gradient-color-1),
    var(--banner-gradient-color-2)
  );

  display: flex;
  align-items: center;
  position: relative;
  color: var(--banner-text-color);

  .notice {
    margin-left: 5%;
    text-align: left;

    div:first-child {
      @media screen and (min-width: 600px) {
        font-size: var(--size-6);
      }
      font-size: var(--size-0);
      line-height: 2em;
      font-family: "Open Sans", sans-serif;
      height: 2em;
    }
    div:last-child {
      @media screen and (min-width: 600px) {
        font-size: var(--size-12);
      }
      font-size: var(--size-2);
      line-height: 1.5em;
      height: 1.5em;
      font-family: "Open Sans", sans-serif;
    }
  }

  .btn-contactanos {
    /* for positioning the button to the right border */
    margin-left: auto;
    font-size: var(--size-0);

    @media screen and (min-width: 600px) {
      font-size: var(--size-4);
    }
    @media screen and (min-width: 960px) {
      font-size: var(--size-6);
    }
  }

  .banner-logo {
    border-radius: 16px;
    min-height: 60px;
    min-width: 60px;
    max-height: 180px;
    max-width: 180px;
    height: 14%;
    width: 14%;
  }

  .banner-icon {
    position: absolute;
    pointer-events: none;
    top: -10%;
    left: 35%;
    width: 120%;
    height: 120%;
  }
`

export function Banner({ img }) {
  return (
    <StyledBanner>
      <img alt="add-banner-img" className="banner-logo" src={img.src} />
      <div className="notice">
        <div>Espacio disponible</div>
        <div>para publicitar</div>
      </div>
      <OutlinedButtonVariant2 className="btn-contactanos">
        <span>CONTACTANOS</span>
      </OutlinedButtonVariant2>
      <img
        alt="add-banner-decoration-icon"
        className="banner-icon"
        src={BannerIcon}
      />
    </StyledBanner>
  )
}
