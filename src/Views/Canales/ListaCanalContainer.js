import React from "react"

import { HorizontalPlaylist } from "../../Components/HorizontalPlaylist"
import { useDedupedQueryCanal } from "../../API/Queries/QueryCanal"

export default function ListaCanalContainer({ id, filterFn, size }) {
  const { loading, error, dedupedResponse } = useDedupedQueryCanal(id)

  return (
    <HorizontalPlaylist
      playlist={dedupedResponse}
      filterFn={filterFn}
      size={size}
    />
  )
}
