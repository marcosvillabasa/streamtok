import React from "react"

import { HorizontalPlaylist } from "../../Components/HorizontalPlaylist"
import { useDedupedQueryCanal } from "../../API/Queries/QueryCanal"

export default function ListaCanalContainer({ id, filterFn, size }) {
  const { loading, error, dedupedResponse } = useDedupedQueryCanal(id)

  if (error) {
    return (
      <div className="error-message">Hubo un error al cargar las listas</div>
    )
  }

  return (
    <HorizontalPlaylist
      loading={loading}
      id={id}
      playlist={dedupedResponse}
      filterFn={filterFn}
      size={size}
    />
  )
}
