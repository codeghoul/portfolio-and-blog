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
      <section className='text-gray-600 dark:text-gray-300'>
        <div className='mx-auto flex px-5 py-18 items-center justify-center flex-col'>
          {/* <img
              className='lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded'
              alt='hero'
              src='/images/myself.png'
            /> */}
          <div className='text-center w-full mt-20 md:mt-32 lg:mt-48'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200'>
              Hi! I'm Jayesh!
            </h1>
            <p className='mb-8 leading-relaxed'>
              For the past 1 year, I’ve been working as a Backend Developer at
              GlobalLogic Inc. I have a sound knowledge of Microservice
              Architecture & Spring Framework is my weapon of choice though I do
              have some background in Frontend Development and I love dabbling
              in React.js & Gatsby during my free time.
            </p>
            <p className='mb-8 leading-relaxed'>
              I’ve always been good at problem-solving & building new things.
              Being a passionate learner, I look forward to expanding my
              experience across different industries & technologies.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
