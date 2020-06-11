import React from "react"
import { useDebouncedCallback } from "use-debounce"
import { Header } from "./Header"
import { HorizontalPlaylist } from "./HorizontalPlaylist"

export default function EventosView({ history }) {
  const [playlist, setPlaylist] = React.useState({ playlist: [] })
  const [search, setSearch] = React.useState("")
  const [debouncedHandleSearch] = useDebouncedCallback((value) => {
    history.push({
      search: "?search=" + value,
    })
    setSearch(value)
  }, 500)
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
    fetch("https://cdn.jwplayer.com/v2/playlists/Lu7EC8Bf")
      .then((res) => res.json())
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
