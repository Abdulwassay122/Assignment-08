import React from 'react'
import BlogItems from '../blogs-items/page'

export default function ML() {
  return (
    <div>
      <BlogItems url={`*[_type == 'post' && categories[]->title match 'Agentic AI']`}/>
    </div>
  )
}
