import Layout from '../components/Layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'

export default function HomePage() {
  return (
    <Layout preview={false}>
      <PageSeo
        title='About'
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
    </Layout>
  )
}
