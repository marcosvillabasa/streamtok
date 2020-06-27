import React from "react"
import styled from "styled-components"
import { PlaylistItem } from "./HorizontalPlaylistItem"
import matchSorter from "match-sorter"

const StyledHorizontalPlaylist = styled.div`
  margin: 0;
  display: flex;
  overflow-x: auto;
  padding: 0 1em;

  ::-webkit-scrollbar {
    height: 4px;
    @media screen and (pointer: fine) {
      height: 10px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: #fff1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  .track-title {
    font-size: 48px;
  }
`

const PlaylistTitle = styled.p`
  font-size: var(--size-10);
  line-height: 1.2em;
  margin-left: 16px;
`

const TitleContainer = styled.div`
  position: relative;
`

const ResultCount = styled.div`
  margin-left: 16px;
  @media screen and (min-width: 600px) {
    font-size: var(--size-4);
  }
  font-size: var(--size-2);
  line-height: 2.5em;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--color-text-5);
  display: inline-flex;

  span {
    color: var(--color-text-9);
    font-weight: 600;
  }
`

const Container = styled.div`
  width: 100vw;

  @media screen and (min-width: 600px) {
    width: 85vw;
    margin: 0% 10vw 0% 5vw;
  }
`

const defaultPlaylist = new Array(5).fill({
  title: "",
  images: [{ src: "", width: 320 }],
  duration: 300,
})

export function HorizontalPlaylist({ loading, playlist, search, size }) {
  const [filtered, setFiltered] = React.useState([])
  React.useEffect(() => {
    if (playlist.playlist.length) {
      setFiltered(
        matchSorter(playlist.playlist, search, {
          keys: [
            (obj) =>
              `${obj.title} ${obj.description} ${obj.tags}`.replace(
                /[,#]/g,
                " "
              ),
          ],
          threshold: matchSorter.rankings.WORD_STARTS_WITH,
        })
      )
    }
  }, [playlist, search])

  if (filtered.length) {
    return (
      <Container>
        <TitleContainer>
          <PlaylistTitle>{playlist.title || "cargando"}</PlaylistTitle>
          <ResultCount className="result-count">
            {loading ? (
              <div>&nbsp;</div>
            ) : (
              <>
                Se encontraron&nbsp;
                <span>{filtered.length}</span>
                <span>&nbsp;resultados.</span>
              </>
            )}
          </ResultCount>
        </TitleContainer>
        <StyledHorizontalPlaylist className="h-swipe">
          {loading
            ? defaultPlaylist.map((track, index) => (
                <PlaylistItem
                  key={index + track.mediaid}
                  track={track}
                  size={size}
                />
              ))
            : filtered.map((track, index) => (
                <PlaylistItem
                  key={index + track.mediaid}
                  track={track}
                  size={size}
                />
              ))}
        </StyledHorizontalPlaylist>
      </Container>
    )
  } else {
    return null
  }
}
