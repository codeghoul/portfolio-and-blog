import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import DarkModeButton from './DarkModeButton'

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
    <header className='flex flex-row items-center justify-between p-5 md:pb-8'>
      <Link href='/'>
        <a className='w-8 h-8 md:w-10 md:h-10 shadow-2xl'>
          <Image
            src='/favicon/favicon-96x96.png'
            width={96}
            height={96}
            alt='Home Logo'
          />
        </a>
      </Link>
      <nav className='flex items-center text-gray-600 dark:text-gray-300 font-mono'>
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
      </nav>
      <DarkModeButton />
    </header>
  )
}
