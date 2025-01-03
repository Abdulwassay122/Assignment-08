import { client } from "@/sanity/lib/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";
import { PortableTextBlock } from '@portabletext/types';

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source).url();
}

interface PortableTextChild {
  text: string;
}

function extractText(portableText: PortableTextBlock[]) {
  return (
    portableText
      ?.map((block: PortableTextBlock) =>
        block.children
          ? block.children.map((child) => {
              if ('text' in child) {
                return (child as PortableTextChild).text;
              }
              return '';
            }).join("")
          : ""
      )
      .join(" ") || ""
  );
}

interface Author {
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

interface Category {
  title: string;
}

interface Post {
  _id: string;
  title: string;
  publishedAt: string;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  body: PortableTextBlock[];
  slug: {
    current: string;
  };
  categories: Category[]; // Correct type for categories
  author: Author;
}


export default async function Blogs(){
  const data: Post[] = await client.fetch(`*[_type == 'post']{
    _id,
    title,
    publishedAt,
    mainImage,
    body,
    slug,
    "categories": categories[]->{ title }, // Updated query
    "author": author->{name, image} 
  }`);
  console.log(data);
  return (
    <section className="px-8 py-12 flex flex-col gap-12 font-poppins bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.map((post: Post) => {
          const slicedText = extractText(post.body).slice(0, 500);
          return (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <div className="h[500px] w-full border-solid border-[2px] border-gray-200 shadow-lg rounded-lg">
                <div className="relative">
                  <Image
                    src={urlFor(post.mainImage.asset._ref)}
                    alt={post.mainImage.alt || "Blog Post Image"}
                    className="w-full h-[400px]  rounded-t-lg"
                    width={1000}
                    height={1000}
                  />
                  <div
                    className={`bg-opacity-90  bg-green-400 absolute top-2 right-2 z-10 w-fit rounded-full px-3`}
                  >
                    <p className="text-white">
                      {post.categories.map((category) => category.title).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div>
                    <h2 className="text-[28px] font-[500] ">{post.title}</h2>
                    <p className="text-sm text-gray-500">
                      Published on: {new Date(post.publishedAt).toDateString()}
                    </p>
                  </div>
                  <p className="text-gray-700 text-[20px]">{slicedText}...</p>
                  <div className="flex items-center gap-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={urlFor(post.author.image.asset._ref)}
                      alt={post.author.name}
                    />
                    <p className="text-[22px] font-bold">{post.author.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};


