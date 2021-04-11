import MoreStories from '../components/more-stories'
import PostPreview from '../components/post-preview'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/seo'
import SectionSeparator from '../components/section-separator'

export default function Blogs({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout preview={preview}>
      <PageSeo
        title={`Blogs `}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blogs`}
      />
      {heroPost && (
        <PostPreview
          key={heroPost.slug}
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <SectionSeparator />
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
