import React from "react"
import { useDebouncedCallback } from "use-debounce"
import { Header } from "./Header"
import { HorizontalPlaylist } from "./HorizontalPlaylist"

export default function EventosView(props) {
  const [playlist, setPlaylist] = React.useState({ playlist: [] })
  const [search, setSearch] = React.useState("")
  const [debouncedHandleSearch] = useDebouncedCallback(setSearch, 500)
  const handleSearch = (event) => debouncedHandleSearch(event.target.value)

  const filterFn = React.useCallback(
    (track) => {
      if (!search) {
        return true
      } else {
        return track.title.toLowerCase().includes(search.toLowerCase())
      }
    },
    [search]
  )

  React.useEffect(() => {
    fetch("https://cdn.jwplayer.com/v2/playlists/SEw1rfH9")
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.playlist.length; i++) {
          res.playlist[i].index = i
        }
        return res
      })
      .then(setPlaylist)
  }, [])

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <HorizontalPlaylist
        playlist={playlist}
        filterFn={filterFn}
        search={search}
      />
    </div>
  )
}
