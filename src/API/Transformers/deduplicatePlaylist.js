export default function deduplicatePlaylist(res) {
  const deduped = []
  res.playlist.forEach((track) => {
    if (deduped.every((e) => e.mediaid !== track.mediaid)) {
      deduped.push(track)
    }
  })
  res.playlist = deduped
  return res
}
