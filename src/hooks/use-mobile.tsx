
import * as React from "react"

// Define more device breakpoints for better responsiveness
const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024
const DESKTOP_BREAKPOINT = 1280

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<"mobile" | "tablet" | "desktop">("desktop")

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType("mobile")
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return deviceType
}

// Helper for responsive font sizes
export function useResponsiveFontSize(baseSize: number, minSize: number = 12, maxSize: number = 24): string {
  const deviceType = useDeviceType()
  
  switch (deviceType) {
    case "mobile":
      return `${Math.max(minSize, baseSize * 0.8)}px`
    case "tablet":
      return `${baseSize}px`
    default:
      return `${Math.min(maxSize, baseSize * 1.1)}px`
  }
}
