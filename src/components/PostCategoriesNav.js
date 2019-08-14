import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch , slug }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink" exact="true" to={`/${slug}/`}>
      All
    </Link>
    {   console.log(categories)}
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}

    {enableSearch && <BlogSearch />}
  </div>
)

export default PostCategoriesNav
