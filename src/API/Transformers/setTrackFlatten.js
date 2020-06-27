export default function setTrackFlatten(res) {
  res.playlist.forEach((track) => {
    track.flatten = `${track.title} ${track.description} ${track.tags}`.replace(
      /[,#]/g,
      " "
    )
  })
  return res
}
