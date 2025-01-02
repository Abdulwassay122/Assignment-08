import {client} from '@/sanity/lib/client';
import React from 'react'
import imageUrlBuilder from "@sanity/image-url";
import StyledPortableText from './styleee';
import Link from 'next/link';
import Image from 'next/image';


interface PageProps {
  params: Params;
}

interface Params {
  id: string;
}

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source).url();
}
const blogDetail = async ({params:{id}}:PageProps) => {
    const data = await client.fetch(`*[slug.current match "${id}"]{
        _id,
        title,
        publishedAt,
        mainImage,
        body,
        slug,
        "categories": categories[]->title,
        "author": author->{name, image} }`)
    console.log(data)
  return (
    <section className='px-16 py-10 flex flex-col gap-16'>
        <h1 className='text-[60px] font-bold'>{data[0].title}</h1>   
        <div className='flex flex-col gap-10'>
            <div className=''>
            <Image 
              src={urlFor(data[0].mainImage.asset._ref)} 
              alt={data[0].mainImage.alt || 'Blog Post Image'}
              className='w-full h-full  rounded-t-lg'
              width={1000} 
              height={1000} 
              />
            </div>
            <div className='flex flex-col items-center gap-4'>

            <div className='flex flex-col gap-10 w-[700px]'>
                <p className='text-md text-gray-500'>Published on: {new Date(data[0].publishedAt).toDateString()}</p>
                <div className='flex flex-col gap-5 text-[20px]'>
                    <StyledPortableText value={data[0].body}/>        
                </div>
            </div>
            <Link href="">
                <div className='flex items-center gap-4 w-[700px]'>
                    <img className='h-12 w-12 rounded-full'  src={urlFor(data[0].author.image.asset._ref)} alt="" />
                    <p className='text-[22px] font-bold'>{data[0].author.name}</p>
                </div>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default blogDetail