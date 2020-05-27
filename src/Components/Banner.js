import React from "react"
import styled from "styled-components"
import { OutlinedButtonVariant2 } from "../Components/Buttons"
import BannerIcon from "../assets/tools-and-utensils.svg"

// TODO: this banner isn't responsive
const StyledBanner = styled.div`
  padding: 3.6rem 6%;
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
    margin-left: 4.8rem;
    text-align: left;

    div:first-child {
      font-size: 2.4rem;
      line-height: 4.8rem;
      font-family: "Open Sans", sans-serif;
      height: 4.8rem;
    }
    div:last-child {
      font-size: 3.6rem;
      line-height: 4.8rem;
      height: 4.8rem;
      font-family: "Open Sans", sans-serif;
    }
  }

  button {
    /* for positioning the button to the right border */
    margin-left: auto;
  }

  .banner-logo {
    border-radius: 16px;
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

export function Banner({ img }) {
  return (
    <StyledBanner>
      <img alt="add-banner-img" className="banner-logo" src={img.src} />
      <div className="notice">
        <div>Espacio disponible</div>
        <div>para publicitar</div>
      </div>
      <OutlinedButtonVariant2>CONTACTANOS</OutlinedButtonVariant2>
      <img
        alt="add-banner-decoration-icon"
        className="banner-icon"
        src={BannerIcon}
      />
    </StyledBanner>
  )
}
