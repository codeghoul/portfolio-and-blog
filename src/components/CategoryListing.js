import Link from 'next/link'

const CategoryListing = ({ allCategories }) => {
  const sum = allCategories
    .map((category) => category.post.length)
    .reduce((partialSum, a) => partialSum + a, 0)
  return (
    <div className='px-10 lg:pt-8'>
      <div className='text-neutral-100 text-2xl lg:text-5xl font-normal font-display'>
        Blogs
      </div>
      <div className='h-2 lg:h-4 bg-gradient-to-br from-gray-100 to-neutral-900' />
      <div className='mt-4 lg:mt-8 flex flex-col gap-2 lg:gap-4'>
        <Link href='/blogs'>
          <a className='hover:no-underline cursor-pointer text-neutral-100 text-sm lg:text-base font-display'>
            All ({sum})
          </a>
        </Link>
        {allCategories.map((category) => {
          return (
            <Link key={category.name} href={`/categories/${category.slug}`}>
              <a className='hover:no-underline cursor-pointer text-neutral-100 text-sm lg:text-base font-display'>
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
