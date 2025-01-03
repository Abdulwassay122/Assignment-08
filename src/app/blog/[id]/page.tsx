import React from 'react';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
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

const blogDetail = async ({ params: { id } }: PageProps) => {
  const data = await client.fetch(`*[slug.current == "${id}"]{
    _id,
    title,
    publishedAt,
    mainImage,
    body,
    slug,
    "categories": categories[]->title,
    "author": author->{name, image} 
  }`);

  console.log(data);

  return (
    <section className='md:px-16 sm:px-8 px-4 py-10 flex flex-col gap-16'>
      <h1 className='md:text-[60px] sm:text-[45px] text-[30px] font-bold'>{data[0].title}</h1>
      <div className='flex flex-col gap-10'>
        <div>
          <Image
            src={urlFor(data[0].mainImage.asset._ref)}
            alt={data[0].mainImage.alt || 'Blog Post Image'}
            className='w-full h-full rounded-t-lg'
            width={1000}
            height={1000}
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col gap-10 md:w-[700px] sm:w-[610px] '>
            <p className='text-md text-gray-500'>Published on: {new Date(data[0].publishedAt).toDateString()}</p>
            <div className='flex flex-col gap-5 sm:text-[20px] text-[16px]'>
              <PortableText value={data[0].body} />
            </div>
          </div>
          {/* <Link href=""> */}
            <div className='flex items-center gap-4 md:w-[700px] sm:w-[610px] w-full'>
              <img className='h-12 w-12 rounded-full' src={urlFor(data[0].author.image.asset._ref)} alt="" />
              <p className='text-[22px] font-bold'>{data[0].author.name}</p>
            </div>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
}

export default blogDetail;
