import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPost } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { BlogSeo } from '../../components/seo'
import siteMetadata from '../../data/siteMetadata'
import markdownToHtml from '../../lib/markdownToHtml'
import SectionSeparator from '../../components/section-separator'
import Link from 'next/link'

export default function Post({ preview, post, next, prev }) {
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
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
          <SectionSeparator />
          {(next || prev) && (
            <div className='flex py-4'>
              {prev && (
                <div className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 object-left'>
                  <Link href={`/blogs/${prev.slug}`}>← Previous</Link>
                </div>
              )}
              {next && (
                <div className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 ml-auto'>
                  <Link href={`/blogs/${next.slug}`}>Next →</Link>
                </div>
              )}
            </div>
          )}
        </article>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  const post = data?.post ?? {}

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      preview,
      post: {
        ...post,
        content,
      },
      next: data?.next,
      prev: data?.prev,
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
