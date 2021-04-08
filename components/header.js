import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='hover:underline text-2xl font-extrabold text-black'>
            JYSH
          </a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-600'>
          <Link href='/'>
            <a className='mr-5 hover:text-gray-900'>About</a>
          </Link>
          <Link href='/blogs'>
            <a className='mr-5 hover:text-gray-900'>Blogs</a>
          </Link>
          <Link href='/'>
            <a className='mr-5 hover:text-gray-900'>Projects</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
