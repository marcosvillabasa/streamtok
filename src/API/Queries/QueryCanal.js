import gql from "graphql-tag"
import { useQuery } from "react-apollo"

export const QueryCanal = gql`
  query($playlistId: String!) {
    response(id: $playlistId)
      @rest(type: "Playlist", path: "playlists/{args.id}") {
      title
      playlist
      logo_data
    }
  }
`

const emptyResponse = { title: "", playlist: [] }

export function useDedupedQueryCanal(id) {
  const { loading, error, data } = useQuery(QueryCanal, {
    variables: {
      playlistId: id,
    },
  })

  if (data) {
    return { loading, error, data: data.response }
  } else {
    return { loading, error, data: emptyResponse }
  }
}
