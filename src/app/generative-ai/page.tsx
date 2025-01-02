import React from 'react'
import BlogItems from '../blogs-items/page'

export default function GenAI() {
  return (
    <div>
      <BlogItems url={"*[_type == 'post' && categories[]->title match 'Genrative AI']"}/>
    </div>
  )
}
