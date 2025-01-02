import React from 'react'
import { client } from '@/sanity/lib/client'

export default async function Testing() {
  const data = await client.fetch(`*[_type == 'post']{
    _id,
    title,
    publishedAt,
    mainImage,
    body,
    slug,
    "categories": categories[]->title,
    "author": author->{name, image} 
  }`)

  console.log(data)

  return (
    <section>
      {data.map((element: any) => (
        <div key={element._id}>
          <p><strong>Title:</strong> {element.title}</p>
          <p><strong>Published At:</strong> {new Date(element.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </section>
  )
}
