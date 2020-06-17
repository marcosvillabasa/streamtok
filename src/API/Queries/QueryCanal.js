import gql from "graphql-tag"
import { useQuery } from "react-apollo"
import React from "react"

export const QueryCanal = gql`
  query($playlistId: String!) {
    response(id: $playlistId) @rest(type: "Playlist", path: "playlists/:id") {
      title
      playlist
    }
  }
`

export function useDedupedQueryCanal(id) {
  const { loading, error } = useQuery(QueryCanal, {
    variables: {
      playlistId: id,
    },
    onCompleted: ({ response }) => {
      const deduped = []
      response.playlist.forEach((track) => {
        if (deduped.every((e) => e.mediaid !== track.mediaid)) {
          deduped.push(track)
        }
      })
      setDedupedResponse({ title: response.title, playlist: deduped })
    },
  })

  const [dedupedResponse, setDedupedResponse] = React.useState({
    playlist: [],
    title: "",
  })
  return { loading, error, dedupedResponse }
}
