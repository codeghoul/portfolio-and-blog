import Alert from './Alert'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import ScrollToTop from './ScrollToTop'

export default function Layout({ preview, children }) {
  return (
    <>
      {preview && <Alert />}
      <Meta />
      <Header />
      <Container>{children}</Container>
      <ScrollToTop />
      <Footer />
    </>
  )
}
