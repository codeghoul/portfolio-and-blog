import BlogCard from '../components/BlogCard'
import BlogWidget from '../components/BlogWidget'
import Layout from '../components/Layout'
import { getBlogs } from '../services'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'

export default function Blogs({ allPosts }) {
  return (
    <Layout>
      <PageSeo
        title={`Blogs`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blogs`}
      />
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='col-span-1 lg:col-span-2'>
            {allPosts.map((post) => (
              <BlogCard key={post.node.slug} post={post.node} />
            ))}
          </div>
          <div className='col-span-1 relative lg:sticky top-8'>
            <BlogWidget />
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
