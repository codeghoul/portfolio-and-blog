import Alert from '../components/alert'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from './container'

export default function Layout({ preview, children }) {
  return (
    <>
      <Alert preview={preview} />
      <Header />
      <div className='min-h-screen'>
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  )
}
