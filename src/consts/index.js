import NextIcon from '../components/icons/Next.astro'
import ReactIcon from '../components/icons/React.astro'
import TypeScriptIcon from '../components/icons/TypeScript.astro'
import NodeIcon from '../components/icons/Node.astro'

export const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextIcon
  },
  REACT: {
    name: 'React',
    class: 'bg-[#232730] text-white',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-blue-900 text-white',
    icon: TypeScriptIcon
  },
  NODE: {
    name: 'Node.js',
    class: 'bg-gray-900 text-white',
    icon: (NodeIcon)
  }
}