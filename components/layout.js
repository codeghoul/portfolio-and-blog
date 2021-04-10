import Alert from '../components/alert'
import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from './container'
import ScrollToTop from './scroll-to-top'

export default function Layout({ preview, children }) {
  return (
    <>
      {preview && <Alert />}
      <Meta />
      <Header />
      <div className='min-h-screen'>
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  )
}
