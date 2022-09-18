export default function Container({ children }) {
  return (
    <main className='snap-y snap-mandatory overflow-scroll z-0 h-screen'>
      {children}
    </main>
  )
}
