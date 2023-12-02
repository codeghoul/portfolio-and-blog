import BlogCard from '../components/BlogCard'
import CategoryListing from './CategoryListing'

const BlogListing = ({ allCategories, allPosts }) => (
  <div className='pt-28'>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-2 lg:sticky'>
        <CategoryListing allCategories={allCategories} />
      </div>
      <div className='col-span-1 lg:col-span-10'>
        {allPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </div>
)

export default BlogListing
