import setTrackFlatten from "./Transformers/setTrackFlatten"
import deduplicatePlaylist from "./Transformers/deduplicatePlaylist"
import appendLogosData from "./Transformers/appendLogosData"

export function responseTransformer(response, tipo) {
  switch (tipo) {
    case "Playlist":
      return response
        .json()
        .then(setTrackFlatten)
        .then(deduplicatePlaylist)
        .then(appendLogosData)
    default:
      return response.json()
  }
}
