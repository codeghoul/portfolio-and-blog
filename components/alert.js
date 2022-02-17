import Container from './Container'

export default function Alert() {
  return (
    <div className='border-b bg-accent-1 border-accent-2'>
      <Container>
        <div className='py-2 text-center text-sm'>
          This is page is a preview.{' '}
          <a
            href='/api/exit-preview'
            className='underline hover:text-cyan duration-200 transition-colors'
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  )
}
