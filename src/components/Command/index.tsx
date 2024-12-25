import React from 'react'
import { InlineSuggest } from 'react-inline-suggest'
import { toast } from 'react-toastify'
import { menus } from '../Nav/constants'
import { scrollToView } from '../../utils/scroll'
import { openURL } from '../../utils/url'
import { focusToCommand } from '../../utils/input'
import { useContactMe } from '../ContactMe'
import { CV_URL } from '../../constants'

export const Command = () => {
  const [commandValue, setCommandValue] = React.useState('')

  const [toggleContact, ContactMe] = useContactMe()

  const handleCommand = (e: React.FormEvent<HTMLInputElement>) => {
    setCommandValue(e.currentTarget.value)
  }

  const handleMatch = (e: string) => {
    toast.success(`Command executed: ${JSON.stringify(e)}`)
    setCommandValue('')
    const action = menus.find((menu) => menu.label === e)?.action
    switch (e) {
      case 'top()':
        window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
        break
      case 'getCV()':
        openURL(CV_URL)
        break
      case 'contactMe()':
        toggleContact()
        break;
      default:
        action && action()
    }
  }

  const haystack = [...menus.map((item) => item.label), 'getCV()']

  const tools = [
    {
      label: 'VueJS',
      color: 'text-vue',
    },
    {
      label: 'NuxtJS',
      color: 'text-tailwind',
    },
    {
      label: 'ReactJS',
      color: 'text-react',
    },
    {
      label: 'NextJS',
      color: 'text-cyan-500',
    },
    {
      label: 'JS',
      color: 'text-function',
    },
    {
      label: 'TS',
      color: 'text-variable',
    },
    {
      label: 'Tailwind',
      color: 'text-tailwind',
    },
    {
      label: 'Spaces: 2',
      color: 'text-gray-950',
    },
    {
      label: '+',
      color: 'text-gray-950',
    },
  ]

  React.useEffect(() => {
    focusToCommand()
  }, [])

  return (
    <div id='command' className="hidden md:block fixed z-10 bottom-0 left-0 w-screen bg-green-900 py-2 px-5">
      <div className="relative flex gap-2 w-full items-center text-xl">
        <span>$</span>
        <InlineSuggest
          haystack={haystack}
          value={commandValue}
          onChange={handleCommand}
          onMatch={handleMatch}
          placeholder={`run command: ${haystack.join(', ')}`}
          className="relative flex-grow bg-transparent text-function outline-none"
          onBlur={() =>
            setTimeout(
              () => focusToCommand(),
              150
            )
          }
        />
        <div className="flex gap-5 font-bold text-xs pointer-events-none">
          {tools.map((tool) => (
            <span key={tool.label} className={tool.color}>{tool.label}</span>
          ))}
        </div>
      </div>
      <ContactMe />
    </div>
  )
}
