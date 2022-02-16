import MoreStories from '../components/more-stories'
import PostCard from '../components/post-card'
import PostWidget from '../components/post-widget'
import Categories from '../components/categories'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/seo'
import SectionSeparator from '../components/section-separator'

export default function Blogs({ preview, allPosts }) {
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
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
