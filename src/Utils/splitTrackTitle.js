export function splitTrackTitle(title = "") {
  const splited = title.split("-")
  return {
    artist: splited[0] || "",
    trackTitle: splited[1] || "",
  }
}
