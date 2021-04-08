import Container from './container'

export default function Footer() {
  return (
    <footer className='bg-accent-1 border-t border-accent-2'>
      <Container>
        <p className='text-xl font-bold tracking-tight md:tracking-tighter leading-tight text-center mb-4 mt-4'>
          Made with ❤ and ☕ by Jayesh Patel
        </p>
      </Container>
    </footer>
  )
}
