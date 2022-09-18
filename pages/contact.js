import Layout from '../components/Layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'
import Container from '../components/Container'
import ContactMe from '../components/ContactMe'

export default function HomePage() {
  return (
    <Layout preview={false}>
      <Container>
        <PageSeo
          title='Contact'
          description={siteMetadata.description}
          url={siteMetadata.siteUrl}
        />
        <section id='contact'>
          <ContactMe />
        </section>
      </Container>
    </Layout>
  )
}
