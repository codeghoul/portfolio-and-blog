import Link from 'next/link'
import Meta from './meta'

export default function Header() {
  return (
    <header>
      <Meta />
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='hover:underline text-2xl font-extrabold text-black'>
            JYSH
          </a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-600'>
          {/* <Link href='/'>
            <a className='mx-2 hover:text-gray-900'>About</a>
          </Link> */}
          <Link href='/blogs'>
            <a className='mx-2 hover:text-gray-900'>Blogs</a>
          </Link>
          {/* <Link href='/'>
            <a className='mx-2 hover:text-gray-900'>Projects</a>
          </Link> */}
        </nav>
      </div>
    </header>
  )
}
