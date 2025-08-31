import React from 'react'
import BlogItems from './BlogItems'

const BlogContainer = () => {
  return (
    <div className='flex gap-10 pt-20 overflow-x-scroll'>
        <BlogItems/>
        <BlogItems/>
        <BlogItems/>
        <BlogItems/>
         <BlogItems/>
        <BlogItems/>
        <BlogItems/>
        <BlogItems/>
    </div>
  )
}

export default BlogContainer