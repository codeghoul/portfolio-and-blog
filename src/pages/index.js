import Layout from '../components/Layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'

const LandingPage = () => {
  return (
    <Layout preview={false}>
      <PageSeo
        title='About'
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <section className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-row mx-auto container justify-center items-center'>
          <div className='w-128 h-128 -ml-120 lg:ml-0 bg-gradient-to-br from-orange-300 to-green-100 dark:from-gray-100 dark:to-neutral-900 rounded-full mb-8 md:mb-0'></div>
          <div className='w-2/3 lg:w-1/2 -ml-14 lg:-ml-28'>
            <div className='dark:text-neutral-100 text-neutral-900 text-lg md:text-4xl lg:text-6xl font-normal font-display mb-4'>
              Hey, I'm Jayesh Patel
            </div>
            <div className='flex flex-col gap-2 lg:gap-4'>
              <p className='dark:text-neutral-100 text-neutral-900 text-xs lg:text-sm font-normal font-body tracking-wide'>
                I'm a Software Engineer with 4+ years of experience who loves
                all things engineering and is passionate ✨ about Databases,
                Language Internals, and everyday know-how of how stuff works.
                I'm currently working at ALLEN Digital, building their planning
                & scheduling module.
              </p>
              <p className='dark:text-neutral-100 text-neutral-900 text-xs lg:text-sm font-normal font-body tracking-wide'>
                On a normal day, you'll either find me trying to hack together
                stuff in different languages, traveling, or learning more about
                the world.
              </p>
              <p className='dark:text-neutral-100 text-neutral-900 text-xs lg:text-sm font-normal font-body tracking-wide'>
                One day at a time!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LandingPage
