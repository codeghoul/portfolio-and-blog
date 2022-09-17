import NavLink from './NavLink'
import DarkModeButton from './DarkModeButton'
import { motion } from 'framer-motion'

const links = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
]

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-600 dark:text-gray-300 font-mono cursor-pointer'
      >
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <DarkModeButton />
      </motion.div>
    </header>
  )
}
