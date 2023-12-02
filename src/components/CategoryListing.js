import Link from 'next/link'

const CategoryListing = ({ allCategories }) => {
  const sum = allCategories ?
    allCategories.map((category) => category.post.length)
    .reduce((partialSum, a) => partialSum + a, 0) : 0
  return (
    <div className='px-10 lg:pt-8'>
      <div className='text-neutral-900 dark:text-neutral-100 text-2xl lg:text-5xl font-normal font-display'>
        Blogs
      </div>
      <div className='h-2 lg:h-4 bg-gradient-to-br dark:from-gray-100 dark:to-neutral-900 from-orange-300 to-green-100' />
      <div className='mt-4 lg:mt-8 flex flex-col gap-2 lg:gap-4'>
        <Link href='/blogs'>
          <a className='hover:no-underline cursor-pointer text-neutral-900 dark:text-neutral-100 text-sm lg:text-base font-display'>
            All ({sum})
          </a>
        </Link>
        {allCategories?.map((category) => {
          return (
            <Link
              key={category.name}
              href={`/blogs/categories/${category.slug}`}
            >
              <a className='hover:no-underline cursor-pointer text-neutral-900 dark:text-neutral-100 text-sm lg:text-base font-display'>
                {category.name + ' (' + category.post.length + ')'}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryListing
