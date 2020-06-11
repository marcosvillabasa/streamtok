import gql from "graphql-tag"

export const QueryCanal = gql`
  query($playlistId: String!) {
    response(id: $playlistId) @rest(type: "Playlist", path: "playlists/:id") {
      title
      playlist
    }
  }
`
