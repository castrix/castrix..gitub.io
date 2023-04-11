import { toast } from "react-toastify"
import { scrollToView } from "../../utils/scroll"
import { focusToCommand } from "../../utils/input";

export const menus = [
  {
    label: 'about()',
    target: '#about',
    action: () => { focusToCommand(); scrollToView('#about') }
  },
  {
    label: 'projects()',
    target: '#projects',
    action: () => { focusToCommand(); scrollToView('#projects') }
  },
  {
    label: 'contactMe()',
    target: '#contactMe',
    action: null
  },
] as const
