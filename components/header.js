import Link from 'next/link'
import Image from 'next/image'
import DarkModeButton from './dark-mode-button'

export default function Header() {
  return (
    <header className='px-5 py-2 flex flex-row items-center justify-between'>
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
      <nav className='flex items-center text-gray-600 dark:text-gray-300'>
        <Link href='/blogs'>
          <a className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'>
            Blog
          </a>
        </Link>
      </nav>
      <DarkModeButton />
    </header>
  )
}
