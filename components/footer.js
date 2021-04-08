import Container from './container'

export default function Footer() {
  return (
    <footer className='bg-accent-1 border-t border-accent-2 mb-8 mt-8 '>
      <Container>
        <p className='text-xl font-bold tracking-tight md:tracking-tighter leading-tight text-center'>
          Made with ❤ and ☕ by Jayesh Patel
        </p>
      </Container>
    </footer>
  )
}
