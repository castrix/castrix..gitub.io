import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import myPhoto from '../../assets/myPhoto.PNG'
import './index.css'
import {
  CV_URL,
  welcomeCV,
  welcomeCall,
  welcomeConsole,
  welcomeCopyright,
  welcomeHover,
} from '../../constants'

export const Welcome = () => {
  const ref = React.createRef<HTMLSpanElement>()
  const photoRef = React.createRef<HTMLImageElement>()
  const nicknameRef = React.createRef<HTMLSpanElement>()

  const CURSOR_CLASS_NAME = 'hide-cursor'

  const showCursorAnimation = (show: boolean) => {
    if (!ref.current) {
      return
    }
    const el = ref.current
    if (show) {
      el.classList.remove(CURSOR_CLASS_NAME)
    } else {
      el.classList.add(CURSOR_CLASS_NAME)
    }
  }

  const showPotrait = (show: boolean) => {
    const SHOW_CLASS = 'show'
    const NICK_CLASS = 'move'
    const el = photoRef.current
    const nick = nicknameRef.current
    if (!el || !nick) {
      return
    }
    if (show) {
      el.classList.add(SHOW_CLASS)
      nick.classList.add(NICK_CLASS)
    } else {
      el.classList.remove(SHOW_CLASS)
      nick.classList.remove(NICK_CLASS)
    }
  }
  return (
    <section
      id="welcome"
      className="relative bg-red h-d-screen flex flex-wrap items-center pointer-events-none pt-[120px] md:pt-0 overflow-hidden"
    >
      <div className="flex md:flex-wrap w-full md:w-1/2 gap-5 pr-9 md:pr-0 pl-9 text-sm md:text-xl h-[320px] md:h-auto">
        <TypeAnimation
          sequence={[welcomeCopyright]}
          speed={99}
          className="text-vue whitespace-pre-line w-full"
          cursor={false}
        />
        <div className="w-full flex">
          {welcomeConsole.map((message, index) => (
            <TypeAnimation
              key={index}
              sequence={message.sequence}
              speed={99}
              className={message.className}
              cursor={false}
            />
          ))}
        </div>
        <div className="w-full flex">
          {welcomeCall.map((message, index) => (
            <TypeAnimation
              key={index}
              sequence={message.sequence}
              speed={99}
              className={message.className}
              cursor={false}
            />
          ))}
        </div>
        <TypeAnimation
          ref={ref}
          sequence={[3600 + 500, welcomeHover]}
          speed={99}
          className={`text-vue whitespace-pre-line w-full`}
          cursor={false}
        />
        <a
          href={CV_URL}
          target="_blank"
          className="pointer-events-auto hover:underline text-vue clickable"
        >
          <TypeAnimation
            ref={ref}
            sequence={[
              () => showCursorAnimation(false),
              3800 + 500,
              () => showCursorAnimation(true),
              welcomeCV,
            ]}
            speed={99}
            className={`whitespace-pre-line w-full ${CURSOR_CLASS_NAME}`}
          />
        </a>
      </div>
      <div className="relative h-d-screen portrait">
        <span
          className="opacity-10 text-black absolute left-5 md:left-0 top-10 md:top-0 font-extrabold nickname text-[200px] md:text-[400px]"
          ref={nicknameRef}
        >
          SAN
        </span>
        <div className="relative overflow-hidden h-d-screen portrait">
          <img src={myPhoto} alt="Ihsan Fajar Ramadhan" ref={photoRef} />
          <svg
            className="absolute top-0"
            viewBox="0 0 402 704"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => showPotrait(true)}
            onMouseLeave={() => showPotrait(false)}
          >
            <path
              d="M174.674 11C197.874 -7.8 212.674 3.16666 217.174 11H226.674C238.674 16.8333 266.474 30.3 281.674 37.5C300.674 46.5 285.174 97 286.674 120.5C287.874 139.3 278.174 145 273.174 145.5L257.674 175.5V213C266.007 212.667 285.474 212.2 296.674 213C310.674 214 305.174 225.5 308.674 230C312.174 234.5 308.674 243 315.174 243C320.374 243 320.674 251 320.174 255C350.174 255 365.174 286.5 388.674 330C412.174 373.5 396.174 575.5 393.674 605.5C391.674 629.5 362.841 638.5 348.674 640C352.841 643.833 361.974 655 365.174 669C368.374 683 355.507 696.5 348.674 701.5C255.674 704.333 66.4741 705.5 53.6741 687.5C37.6741 665 72.6741 645.5 53.6741 646.5C34.6741 647.5 4.67412 553 1.17412 541.5C-2.32588 530 24.6741 346 30.1741 330C35.6741 314 56.1741 259 91.1741 255C126.174 251 114.674 244 134.674 219C150.674 199 168.007 201.667 174.674 205.5C174.674 173 139.674 121 134.674 97C129.674 73 145.674 34.5 174.674 11Z"
              fill="transparent"
              stroke="transparent"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
