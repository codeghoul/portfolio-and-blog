import Layout from '../components/Layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'

export default function HomePage() {
  return (
    <Layout preview={false}>
      <PageSeo
        title='About'
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <section className='text-gray-600 dark:text-gray-300 min-h-full'>
        <div className='mx-auto w-11/12 flex items-center justify-center flex-col'>
          <div className='w-full mt-20 md:mt-32 lg:mt-48'>
            <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'>
              Hi! I'm&nbsp;
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400'>
                Jayesh
              </span>
            </h1>
            <h2 className='text-2xl md:text-2xl font-normal mb-4'>
              A CS Engineer, Traveler and Perpetual Student
            </h2>
            <p className='mb-4 leading-relaxed'>
              I'm a Software Engineer with 4+ years of experience who loves all
              things engineering and passionate ✨ about Databases, Language
              Internals and every day know-how of how stuff works. I'm currently
              working at ALLEN Digital building their planning & scheduling
              module.
            </p>
            <p className='mb-4 leading-relaxed'>
              On a normal day you'll either find me trying to hack together
              stuff in different languages, traveling or learning more about the
              world.
            </p>
            <p className='mb-4 leading-relaxed'>One day at a time!</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
