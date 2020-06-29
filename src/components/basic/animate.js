import React, { useState, useEffect } from "react"

export const Animate = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) {
      setRender(true)
    }
  }, [show])

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false)
    }
  }

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.5s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  )
}
