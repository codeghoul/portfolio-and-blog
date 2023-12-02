import Alert from './Alert'
import Header from './Header'
import Meta from './Meta'

export default function Layout({ preview, children }) {
  return (
    <div className='bg-orange-100 dark:bg-neutral-900 min-h-screen min-w-screen'>
      {preview && <Alert />}
      <Meta />
      <Header />
      <div className='container mx-auto'>{children}</div>
    </div>
  )
}
