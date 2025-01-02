import React from 'react'
import BlogItems from '../blogs-items/page'

export default function page() {
  return (
    <div>
      <BlogItems url={`*[_type == 'post' && categories[]->title match 'Machine Learning']`}/>
    </div>
  )
}
