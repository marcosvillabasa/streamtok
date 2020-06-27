import setTrackFlatten from "./Transformers/setTrackFlatten"
import deduplicatePlaylist from "./Transformers/deduplicatePlaylist"

export function responseTransformer(response, tipo) {
  switch (tipo) {
    case "Playlist":
      return response.json().then(setTrackFlatten).then(deduplicatePlaylist)
    default:
      return response.json()
  }
}
