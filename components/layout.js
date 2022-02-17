import Alert from './alert'
import Meta from './Meta'
import Header from './header'
import Footer from './footer'
import Container from './container'
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
