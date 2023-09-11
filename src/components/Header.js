import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
  {
    name: 'Trips',
    href: '/trips',
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className='bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto p-5'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/'>
              <a className='flex items-center space-x-2'>
                <Image
                  src='/icons/favicon-96x96.png'
                  width={48}
                  height={48}
                  alt='Home Logo'
                />
                <span className='text-xl text-gray-800 dark:text-gray-200 font-semibold'>
                  JYSH
                </span>
              </a>
            </Link>
          </div>

          <div className='relative md:hidden inline-block text-left'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-900'
              onClick={toggleMobileMenu}
              id='menu-button'
              aria-expanded='true'
              aria-haspopup='true'
            >
              {mobileMenuOpen ? (
                <svg
                  className='-mr-1 h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='-mr-1 h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>

            {mobileMenuOpen && (
              <div
                className='absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
                tabIndex='-1'
              >
                <div className='py-1' role='none'>
                  {links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      <a
                        className='text-gray-700 block px-4 py-2 text-sm'
                        role='menuitem'
                        tabIndex='-1'
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav
            className={`hidden md:flex space-x-4 ${
              mobileMenuOpen ? 'hidden' : ''
            }`}
          >
            {links.map((link) => (
              <NavLink link={link} key={link.href} />
            ))}
          </nav>

          {/* Dark Mode Button (Not in Mobile View) */}
          <div className='hidden md:block'>
            <DarkModeButton />
          </div>
        </div>
      </div>
    </header>
  )
}
