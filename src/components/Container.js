export default function Container({ children }) {
  return (
    <main className='md:container mx-auto min-h-screen mt-20 md:mt-0'>
      {children}
    </main>
  )
}
