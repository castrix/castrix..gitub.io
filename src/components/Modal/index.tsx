import React, { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = (props: Props) => {
  const modalRef = React.createRef<HTMLDivElement>()

  const handleClose = () => {
    const el = modalRef.current
    if (!el) {
      props.onClose()
      return
    }
    el.classList.add('scale-90', 'opacity-0', 'pointer-events-none')
    const timeout = setTimeout(() => {
      props.onClose()
    }, 200)
  }

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const el = modalRef.current
      if (!el) return
      if (props.isOpen) {
        el.classList.remove('scale-90', 'opacity-0', 'pointer-events-none')
      } else {
        el.classList.add('scale-90', 'opacity-0', 'pointer-events-none')
      }
    }, 100)
    return () => clearTimeout(timeout)
  }, [props.isOpen])

  return (
    <div
      ref={modalRef}
      className={`fixed top-0 left-0 z-50 w-screen h-screen bg-black transition-all border border- border-secondary rounded-md scale-90 opacity-0 pointer-events-none ${
        !props.isOpen && 'hidden'
      }`}
    >
      <div className="relative w-full h-full p-14">
        <svg
          className="absolute top-5 right-5 cursor-pointer"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          onClick={handleClose}
        >
          <g data-name="Layer 2" id="Layer_2" fill="white">
            <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
            <path d="M11.76,21.24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l8.49-8.49A1,1,0,0,1,21,12.46L12.46,21A1,1,0,0,1,11.76,21.24Z" />
            <path d="M20.24,21.24a1,1,0,0,1-.7-.29l-8.49-8.49a1,1,0,0,1,1.41-1.41L21,19.54A1,1,0,0,1,21,21,1,1,0,0,1,20.24,21.24Z" />
          </g>
          <g id="frame">
            <rect fill="none" height="32" width="32" />
          </g>
        </svg>
        {props.isOpen && <div className="w-full h-full overflow-scroll">{props.children}</div>}
      </div>
    </div>
  )
}
