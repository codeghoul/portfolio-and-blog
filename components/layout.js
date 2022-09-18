import Alert from './alert'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

export default function Layout({ preview, children }) {
  return (
    <>
      {preview && <Alert />}
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  )
}
