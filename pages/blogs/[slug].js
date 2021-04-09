import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { BlogSeo } from '../../components/seo'
import siteMetadata from '../../data/siteMetadata'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      {post && (
        <BlogSeo url={`${siteMetadata.siteUrl}/blogs/${post.slug}`} {...post} />
      )}
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts && morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  const post = data?.post ?? {}

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      preview,
      post: {
        ...post,
        content,
      },
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/blogs/${slug}`) ?? [],
    fallback: true,
  }
}
