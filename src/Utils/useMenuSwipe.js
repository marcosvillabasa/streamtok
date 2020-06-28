import React from "react"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { checkSwipeClass } from "../Utils/checkSwipeClass"

export function useMenuSwipe() {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const rootRef = React.useRef(document.querySelector("#root"))
  const bodyRef = React.useRef(document.querySelector("body"))

  const closeMenu = React.useCallback(() => {
    setOpen(false)
    bodyRef.current.style = "overflow: overlay;"
  }, [])

  const openMenu = React.useCallback(() => {
    setOpen(true)
    bodyRef.current.style = "overflow: hidden;"
  }, [])

  React.useEffect(() => {
    if (isMobile) {
      let start_scroll = null
      const onTouchStart = (event) => {
        if (checkSwipeClass(event)) {
          start_scroll = null
        } else {
          start_scroll = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
          }
        }
      }
      const onTouchMove = (event) => {
        if (start_scroll && event.changedTouches?.length) {
          if (Math.abs(start_scroll.y - event.changedTouches[0].clientY > 50)) {
            start_scroll = null
            return
          }
          if (event.changedTouches[0].clientX - start_scroll.x > 100) {
            bodyRef.current.style = "overflow: hidden;"
            setOpen(true)
          } else if (start_scroll.x - event.changedTouches[0].clientX > 100) {
            bodyRef.current.style = "overflow: overlay;"
            setOpen(false)
          }
        }
      }

      const root = rootRef.current
      root.addEventListener("touchstart", onTouchStart)
      root.addEventListener("touchmove", onTouchMove)

      return () => {
        root.removeEventListener("touchstart", onTouchStart)
        root.removeEventListener("touchmove", onTouchMove)
      }
    }
  }, [isMobile])

  return { open, openMenu, closeMenu, isMobile }
}
