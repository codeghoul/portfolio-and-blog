import Alert from './alert'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

export default function Layout({ preview, children }) {
  return (
    <div className='snap-y snap-mandatory overflow-scroll z-0'>
      {preview && <Alert />}
      <Meta />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
