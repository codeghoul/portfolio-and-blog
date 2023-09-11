import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'

const landingPageContent = {
  greeting: "Hi, I'm ",
  description: 'A CS Engineer, Traveler, and Perpetual Student',
  intro:
    "I'm a Software Engineer with 4+ years of experience who loves all things engineering and is passionate ✨ about Databases, Language Internals, and everyday know-how of how stuff works. I'm currently working at ALLEN Digital, building their planning & scheduling module.",
  hobbies:
    "On a normal day, you'll either find me trying to hack together stuff in different languages, traveling, or learning more about the world.",
  motto: 'One day at a time! 🌟',
}

const LandingPage = () => {
  return (
    <Layout preview={false}>
      <PageSeo
        title='About'
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <section className='text-gray-700 dark:text-gray-300 min-h-screen flex items-center justify-center'>
        <div className='mx-auto w-11/12 max-w-4xl text-center'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4'
          >
            {landingPageContent.greeting}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400'>
              Jayesh
            </span>
            <span
              role='img'
              aria-label='Wave emoji'
              className='ml-2 animate-wave inline-block'
            >
              👋
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-lg md:text-xl font-normal mb-4'
          >
            {landingPageContent.description}
          </motion.h2>
          {renderContentSection(landingPageContent.intro)}
          {renderContentSection(landingPageContent.hobbies)}
          {renderContentSection(landingPageContent.motto)}
        </div>
      </section>
    </Layout>
  )
}

function renderContentSection(content) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='mb-4 leading-relaxed'
    >
      {content}
    </motion.p>
  )
}

export default LandingPage
