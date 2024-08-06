import React from 'react'


const colors = (isActive?: boolean) => ({
  blue: `${!isActive ? 'bg-none border-white' : 'bg-blue-500 border-blue-700'} hover:bg-blue-500  hover:border-blue-700`,
  yellow: `${!isActive ? 'bg-none border-white' : 'bg-yellow-500 border-yellow-700'} hover:bg-yellow-500  hover:border-yellow-700`,
  green: `${!isActive ? 'bg-none border-white' : 'bg-green-500  border-green-700'} hover:bg-green-500  hover:border-green-700`,
  red: `${!isActive ? 'bg-none border-white' : 'bg-red-500  border-red-700'} hover:bg-red-500  hover:border-red-700`,
  purple: `${!isActive ? 'bg-none border-white' : 'bg-purple-500  border-purple-700'} hover:bg-purple-500  hover:border-purple-700`,
})

interface Props {
  color: keyof ReturnType<typeof colors>
  children: React.ReactNode
  onClick?: () => void
  isActive?: boolean
}

export const IFButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`pointer-events-auto min-w-[128px] text-center outline-none text-white font-bold py-2 px-4 border border-b-4 rounded transition-all focus:border-0 ${
        colors(props.isActive)[props.color]
      }`}
    >
      {props.children}
    </button>
  )
}
