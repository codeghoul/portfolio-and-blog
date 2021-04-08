import Link from 'next/link'
import Container from './container'

export default function Header() {
  return (
    <header className='text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8'>
      <Container>
        <Link href='/'>
          <a className='hover:underline'>JYSH</a>
        </Link>
        .
      </Container>
    </header>
  )
}
