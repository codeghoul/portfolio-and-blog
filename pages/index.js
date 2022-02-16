import Layout from '../components/layout'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/seo'

export default function HomePage() {
  return (
    <Layout preview={false}>
      <PageSeo
        title='About'
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <section className='text-gray-600 dark:text-gray-300 pt-16'>
        <div className='mx-auto w-5/6 flex items-center justify-center flex-col'>
          <div className='text-center w-full mt-20 md:mt-32 lg:mt-48'>
            <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'>
              <div className='animate-wave inline-block'>👋🏼</div>&nbsp; Welcome
              to my&nbsp;
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400'>
                space!
              </span>
            </h1>
            <p className='mb-8 leading-relaxed'>
              I'm a Software Engineer with 2.5+ years of experience who loves
              all things engineering and passionate ✨ about writing clean,
              future-proof code.
            </p>
            <p className='mb-8 leading-relaxed'>
              When I'm not helping Ula build their logistics charter for
              empowering small retailers in Indonesia, I'm coding, traveling or
              learning more about the world, One day at a time!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
