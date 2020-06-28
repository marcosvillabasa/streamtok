export default function setTrackFlatten(res) {
  res.playlist.forEach((track) => {
    track.flatten = `${track.title} ${track.description} ${track.tags}`.replace(
      /[,#]/g,
      " "
    )
    if (track.tags) {
      track.tagsv2 = track.tags.split(",").join(" ")
    }
  })
  return res
}
