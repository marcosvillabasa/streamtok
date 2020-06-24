import React from "react"
import iframesData from "./Iframes"
import { useRouteMatch, Redirect } from "react-router"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const Container = styled.div`
  margin: 24px 4% 0% 4%;
  max-width: 1280px;

  h2 {
    font-size: var(--size-6);
    color: var(--color-text-9);
    margin-bottom: 16px;
  }

  @media (orientation: landscape) {
    max-width: 65%;
  }

  .wrapper {
    position: relative;
    /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default function TV_View(props) {
  const match = useRouteMatch()
  const [data] = React.useState(() => {
    const currentData = iframesData.find(
      (iframe) => iframe.slug === match.params.id
    )
    if (currentData) {
      return { title: currentData.title, src: currentData.src }
    } else {
      return undefined
    }
  })

  if (!data) {
    return <Redirect to="/tv" />
  }

  return (
    <Container>
      <Helmet>
        <title>StreamTOK [TV] - {data.title}</title>
      </Helmet>
      <h2>{data.title}</h2>
      <div className="wrapper">
        <iframe
          title={data.title}
          src={data.src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  )
}
