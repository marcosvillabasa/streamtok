import React from "react"
import styled from "styled-components"
import { HeadingWithFinalDot } from "../Components/HeadingWithFinalDot"
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "../assets/SocialMediaIcons"

const StyledSocialMediaLinks = styled.section`
  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    @media screen and (max-width: 1280px) {
      margin-top: 20px;
      justify-content: flex-start;

      div {
        margin-right: 48px;
      }
    }
  }
`

const StyledSocialMediaIcons = styled.div`
  cursor: pointer;
  border-radius: 100%;
  svg {
    height: 48px;
    width: 48px;
    fill: white;
    transition: 0.2s all;
  }
  transition: 0.2s all;
  will-change: background-color, transform;
  display: flex;
  align-items: center;
  background-color: #373737;
  justify-content: center;

  &:hover {
    background-color: #141519;
    transform: scale(1.2);
    &#facebook-icon-link {
      svg {
        fill: #4360d4;
      }
    }
    &#twitter-icon-link {
      svg {
        fill: #17a2ff;
      }
    }
    &#instagram-icon-link {
      svg {
        fill: #ff173f;
      }
    }
  }

  &#facebook-icon-link {
    border: 1px solid #4360d4;
    box-shadow: 0px 10px 20px #4360d429;
  }
  &#twitter-icon-link {
    border: 1px solid #17a2ff;
    box-shadow: 0px 10px 20px #17a2ff29;
  }
  &#instagram-icon-link {
    border: 1px solid #ff173f;
    box-shadow: 0px 10px 20px #ff173f29;
  }
`

const FacebookLink = "http://www.facebook.com"
const TwitterLink = "http://www.twitter.com"
const InstagramLink = "http://www.instagram.com"

export default function SocialMediaLinks() {
  return (
    <StyledSocialMediaLinks id="social-media-links">
      <HeadingWithFinalDot>Redes sociales</HeadingWithFinalDot>
      <nav>
        <a
          href={FacebookLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <StyledSocialMediaIcons id="facebook-icon-link">
            <FacebookIcon />
          </StyledSocialMediaIcons>
        </a>
        <a
          href={TwitterLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <StyledSocialMediaIcons id="twitter-icon-link">
            <TwitterIcon />
          </StyledSocialMediaIcons>
        </a>
        <a
          href={InstagramLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <StyledSocialMediaIcons id="instagram-icon-link">
            <InstagramIcon />
          </StyledSocialMediaIcons>
        </a>
      </nav>
    </StyledSocialMediaLinks>
  )
}
