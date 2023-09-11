import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import siteMetadata from '../../data/siteMetadata'
import { BlogSeo } from '../../components/SEO'
import { getBlogDetails, getBlogs } from '../../services'
import Layout from '../../components/Layout'
import AdjacentBlogs from '../../components/AdjacentBlogs'
import BlogDetail from '../../components/BlogDetail'
import BlogWidget from '../../components/BlogWidget'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={false}>
      {post && (
        <BlogSeo url={`${siteMetadata.siteUrl}/blogs/${post.slug}`} {...post} />
      )}
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <div className='container mx-auto py-8 lg:py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            <div className='col-span-1 lg:col-span-8'>
              <BlogDetail post={post} />
              <AdjacentBlogs slug={post.slug} createdAt={post.createdAt} />
            </div>
            <div className='col-span-1 lg:col-span-4'>
              <div className='relative lg:sticky top-8'>
                <BlogWidget
                  slug={post.slug}
                  categories={post.categories.map((category) => category.slug)}
                />
                {/* <Categories /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getBlogDetails(params.slug)
  return {
    props: {
      post: data,
    },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getBlogs()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
