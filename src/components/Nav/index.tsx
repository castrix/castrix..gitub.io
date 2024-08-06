import React from 'react'
import { scrollToView, useWindowScroll } from '../../utils/scroll'
import { TypeAnimation } from 'react-type-animation'
import { menus } from './constants'
import { openURL } from '../../utils/url'
import { useContactMe } from '../ContactMe'
import { CV_URL } from '../../constants'

export const Nav = () => {
  const [scrollY] = useWindowScroll()
  const [toggleContact, ContactMe] = useContactMe()

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-20 text-function flex justify-between px-9 text-lg border-b-4 border-default pointer-events-none transition-all ${
        scrollY > 300 ? 'lg:text-md py-2' : 'lg:text-2xl py-6'
      } flex-wrap gap-2`}
    >
      <a href="/" className="hover:underline pointer-events-auto clickable">
        <TypeAnimation sequence={['myPortofolio(']} speed={30} cursor={false} />
        <TypeAnimation
          sequence={[1000, 'ihsanFajarRamadhan']}
          speed={80}
          className="text-variable"
          cursor={false}
        />
        <TypeAnimation sequence={[2000, ')']} speed={30} />
      </a>
      <div className="flex justify-between gap-12">
        {[
          ...menus,
          scrollY > 300 ? { label: 'getCV()', target: '#welcome', action: () => openURL(CV_URL) } : null,
        ]
          .filter(Boolean)
          .map((menu, index) => {
            const isGetCv = menu?.label === 'getCV()'
            return (
              <span
                key={menu?.label}
                className="cursor-pointer hover:underline pointer-events-auto w-fit clickable"
                onClick={() => menu?.label === menus[2].label ? toggleContact() : menu?.action && menu?.action()}
              >
                <TypeAnimation
                  sequence={[!isGetCv ? index * 600 : 0, menu?.label || '']}
                  speed={80}
                  cursor={false}
                />
              </span>
            )
          })}
      </div>
      <ContactMe />
    </nav>
  )
}
