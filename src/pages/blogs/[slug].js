import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import siteMetadata from '../../data/siteMetadata'
import { BlogSeo } from '../../components/SEO'
import { getAllBlogs, getCategories, getBlogDetails } from '../../services'
import Layout from '../../components/Layout'
import BlogDetail from '../../components/BlogDetail'
import CategoryListing from '../../components/CategoryListing'

export default function Blog({ blog, allCategories }) {
  const router = useRouter()

  if (!router.isFallback && !blog) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={false}>
      {blog && (
        <BlogSeo url={`${siteMetadata.siteUrl}/blogs/${blog.slug}`} {...blog} />
      )}
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <div className='pt-28'>
          <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-2 lg:sticky'>
              <CategoryListing allCategories={allCategories} />
            </div>
            <div className='col-span-1 lg:col-span-10'>
              <BlogDetail blog={blog} />
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
  const allCategories = (await getCategories()) ?? []
  return {
    props: {
      blog: data,
      allCategories,
    },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getAllBlogs()
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
