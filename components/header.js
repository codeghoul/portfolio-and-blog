import Link from 'next/link'
import Meta from './meta'
import DarkModeButton from './dark-mode-button'

export default function Header() {
  return (
    <header>
      <Meta />
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='hover:underline text-2xl font-extrabold'>JYSH</a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-600 dark:text-gray-300'>
          <Link href='/blogs'>
            <a className='mx-2 hover:text-gray-900 dark:hover:text-gray-100'>
              Blogs
            </a>
          </Link>
          <DarkModeButton />
        </nav>
      </div>
    </header>
  )
}
