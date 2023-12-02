import Layout from '../../../components/Layout'
import { getCategories, getCategoryBlogs } from '../../../services'
import siteMetadata from '../../../data/siteMetadata'
import { PageSeo } from '../../../components/SEO'
import BlogListing from '../../../components/BlogListing'

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

export async function getStaticProps({ params }) {
  const allPosts = (await getCategoryBlogs(params.category)) ?? []
  const allCategories = (await getCategories()) ?? []
  return {
    props: { allPosts, allCategories },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { category: slug } })),
    fallback: true,
  }
}
