export default function Container({ children }) {
  return (
    <main className='p-2 md:container mx-auto mb-8 min-h-screen'>
      {children}
    </main>
  )
}
