import React, { useEffect } from "react"
import { useRouteMatch, Redirect } from "react-router"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import {fetchChannels} from '../../Redux/actions/channelsActions'
import {connect} from 'react-redux'


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

const TV_View = (props) => {

  useEffect(()=>{
    props.dispatch(fetchChannels())
  },[])
  const match = useRouteMatch()
  const [data] = React.useState(() => {
    const currentData = props.channels.channels.find(
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
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
      channels: state.channels
  }
  
}

export default connect(mapStateToProps)(TV_View)