import Alert from './Alert'
import Meta from './Meta'

export default function Layout({ preview, children }) {
  return (
    <div className='bg-neutral-900 min-h-screen min-w-screen'>
      {preview && <Alert />}
      <Meta />
      <div className='container mx-auto'>{children}</div>
    </div>
  )
}
