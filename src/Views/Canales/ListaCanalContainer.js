import React from "react"
import strings from "../../strings.json"

import { HorizontalPlaylist } from "../../Components/HorizontalPlaylist"
import { useDedupedQueryCanal } from "../../API/Queries/QueryCanal"

export default function ListaCanalContainer({ id, search, size }) {
  const { loading, error, data } = useDedupedQueryCanal(id)

  if (error) {
    return (
      <div className="error-message">
        {strings.list_error_message || "Hubo un error al cargar las listas"}
      </div>
    )
  }

  return (
    <HorizontalPlaylist
      loading={loading}
      id={id}
      playlist={data}
      search={search}
      size={size}
    />
  )
}
