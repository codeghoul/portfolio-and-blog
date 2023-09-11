export default function Container({ children }) {
  return (
    <main className='container mx-auto px-4 lg:px-8 xl:px-16 min-h-screen'>
      {children}
    </main>
  )
}
