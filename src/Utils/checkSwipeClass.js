const swipeClass = "h-swipe"
export function checkSwipeClass(event) {
  return event.path.some(($DOMElement) => {
    try {
      return $DOMElement.className.includes(swipeClass)
    } catch {
      return false
    }
  })
}
