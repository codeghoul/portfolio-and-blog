import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  console.log(categories)

  return (
    <div className='shadow-lg p-8 mb-8 hover:shadow-xl border border-current'>
      <h3 className='text-xl mb-8 border-b pb-4'>Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <a
            className={`cursor-pointer block hover:no-underline text-md ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } pb-3 mb-3`}
          >
            {category.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Categories
