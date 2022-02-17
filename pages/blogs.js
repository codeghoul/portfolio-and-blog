import BlogCard from '../components/BlogCard'
import BlogWidget from '../components/BlogWidget'
import Categories from '../components/Categories'
import Layout from '../components/Layout'
import { getBlogs } from '../services'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'

export default function Blogs({ allPosts }) {
  return (
    <Layout>
      <PageSeo
        title={`Blogs `}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blogs`}
      />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {allPosts.map((post) => (
            <BlogCard key={post.node.slug} post={post.node} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative'>
            <BlogWidget />
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = (await getBlogs()) ?? []
  return {
    props: { allPosts },
  }
}
