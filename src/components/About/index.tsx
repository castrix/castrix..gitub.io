import React, { useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { menus } from '../Nav/constants'
import { AbouIllustration } from '../Illustration'
import { IFButton } from '../Button'
import { Modal } from '../Modal'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import {
  aboutGreetings,
  aboutMessages,
  aboutSections,
  CV_URL,
  timeline,
} from '../../constants'
import { useIntersectionObserver } from '@/utils/hooks'
import { ThreeScene } from '../TwiceStick'

export const About = () => {
  const pageRef = useRef<HTMLElement | null>(null)
  const entry = useIntersectionObserver(pageRef, {})
  const isVisible = !!entry?.isIntersecting
  const [selectedSection, setSelectedSection] = useState<string>(
    aboutSections.background
  )
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section
      id={'#about'}
      ref={pageRef}
      className="w-full h-d-screen bg-black flex items-center border-b border-white flex-col md:flex-row pt-[20px]"
    >
      {isVisible && (
        <>
          <div className="w-[100dvw] md:w-1/2">
            {/* <AbouIllustration /> */}
            <ThreeScene />
          </div>
          <div className="w-[100dvw] md:w-1/2 pl-9 md:pl-0 pr-9 md:pr-28 z-10 pointer-events-none -mt-[110px] md:mt-0">
            <TypeAnimation
              sequence={aboutGreetings}
              speed={8}
              repeat={Infinity}
              className="text-normal md:text-3xl whitespace-pre-line"
            />
            <div className="flex gap-2 md:gap-10 mt-2 md:mt-10 flex-wrap">
              <IFButton
                color="green"
                onClick={() => setSelectedSection(aboutSections.background)}
                isActive={selectedSection === aboutSections.background}
              >
                {aboutSections.background}
              </IFButton>
              <IFButton
                color="yellow"
                onClick={() => setSelectedSection(aboutSections.interest)}
                isActive={selectedSection === aboutSections.interest}
              >
                {aboutSections.interest}
              </IFButton>
              <IFButton color="blue" onClick={() => setModalOpen(true)}>
                {aboutSections.career}
              </IFButton>
            </div>
            <div className="flex mt-2 md:mt-10 w-full text-base">
              {selectedSection === aboutSections.background &&
                aboutMessages[aboutSections.background]}
              {selectedSection === aboutSections.interest &&
                aboutMessages[aboutSections.interest]}
            </div>
            <div className="flex gap-2 md:gap-10 mt-2 md:mt-10 md:justify-end">
              <a href="mailto:ihsan.fr@icloud.com">
                <IFButton color="red" isActive>HIRE ME</IFButton>
              </a>
              <a href={CV_URL} target='_blank'>
                <IFButton color="purple" isActive>GET CV</IFButton>
              </a>
            </div>
          </div>
        </>
      )}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="w-full text-center">
          <span className="text-xl font-bold">
            CAREER TIMELINE (PRESENT TO PAST)
          </span>
        </div>
        <VerticalTimeline className="mt-2">
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: index === 0 ? '#182930' : '#454545',
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${index === 0 ? '#182930' : '#454545'}`,
              }}
              date={item.date}
              iconStyle={{
                background: '#FFF',
                color: '#fff',
                overflow: 'hidden',
              }}
              icon={<img src={item.icon} />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Modal>
    </section>
  )
}
