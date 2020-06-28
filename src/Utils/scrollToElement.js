const PER_TICK_MS = 16
export function scrollToElement(to, duration) {
  if (duration < 0) return
  const difference = to - document.documentElement.scrollTop
  const perTick = (difference / duration) * PER_TICK_MS

  setTimeout(function () {
    document.documentElement.scrollTop += perTick
    if (document.documentElement.scrollTop === to) return
    scrollToElement(to, duration - PER_TICK_MS)
  }, PER_TICK_MS)
}
