import Layout from '../components/Layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Container from '../components/Container'

export default function HomePage() {
  return (
    <Layout preview={false}>
      <Container>
        <PageSeo
          title='About'
          description={siteMetadata.description}
          url={siteMetadata.siteUrl}
        />
        <section id='hero' className='snap-center shrink-0'>
          <Hero />
        </section>

        <section id='about' className='snap-center shrink-0'>
          <About />
        </section>

        <section id='experience' className='snap-center shrink-0'>
          <WorkExperience />
        </section>

        <section id='skills' className='snap-start shrink-0'>
          <Skills />
        </section>

        <section id='projects' className='snap-start shrink-0'>
          <Projects />
        </section>
      </Container>
    </Layout>
  )
}
