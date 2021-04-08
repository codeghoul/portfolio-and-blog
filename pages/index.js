import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Welcome.</title>
        </Head>
        <div className='mt-28 md:mt-56'>
          <h1 className='text-3xl font-extrabold'>Hi! I'm Jayesh!</h1>
          <br />
          <p className='text-left leading-tight '>
            For the past 1 year, I’ve been working as a Backend Developer at
            GlobalLogic Inc. I have a sound knowledge of Microservice
            Architecture & Spring Framework is my weapon of choice though I do
            have some background in Frontend Development and I love dabbling in
            React.js & Gatsby during my free time.
          </p>
          <br />
          <p className='text-left leading-tight'>
            I’ve always been good at problem-solving & building new things.
            Being a passionate learner, I look forward to expanding my
            experience across different industries & technologies.
          </p>
        </div>
        <br />
        <Link href='/posts'>
          <a className='underline italic'>Look at my blog posts!</a>
        </Link>
      </Layout>
    </>
  )
}
