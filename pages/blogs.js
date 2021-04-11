import MoreStories from '../components/more-stories'
import PostPreview from '../components/post-preview'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/seo'

export default function Blogs({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout preview={preview}>
      <PageSeo
        title={`Blogs by`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blogs`}
      />
      {heroPost && (
        <div className='my-4 md:my-6'>
          <PostPreview
            key={heroPost.slug}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        </div>
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
