import Layout from '../components/Layout'
import { getAllBlogs, getCategories } from '../services'
import siteMetadata from '../data/siteMetadata'
import { PageSeo } from '../components/SEO'
import BlogListing from '../components/BlogListing'

export default function Blogs({ allPosts, allCategories }) {
  return (
    <Layout>
      <PageSeo
        title={`Blogs`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blogs`}
      />
      <BlogListing allCategories={allCategories} allPosts={allPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllBlogs()) ?? []
  const allCategories = (await getCategories()) ?? []
  return {
    props: { allPosts, allCategories },
  }
}
