import React from "react"
import styled from "styled-components"
import { OutlinedButtonVariant2 } from "../Components/Buttons"
import BannerIcon from "../assets/tools-and-utensils.svg"

// TODO: this banner isn't responsive
const StyledBanner = styled.div`
  padding: 36px 120px;
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
    margin-left: 48px;
    text-align: left;

    div:first-child {
      font-size: 24px;
      line-height: 48px;
      font-family: "Open Sans", sans-serif;
      height: 48px;
    }
    div:last-child {
      font-size: 36px;
      line-height: 48px;
      height: 48px;
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
