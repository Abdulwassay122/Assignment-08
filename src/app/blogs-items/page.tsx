import { client } from "@/sanity/lib/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source).url();
}

function extractText(portableText: any) {
  return (
    portableText
      ?.map((block: any) =>
        block.children
          ? block.children.map((child: any) => child.text).join("")
          : ""
      )
      .join(" ") || ""
  );
}

const BlogItems = async ({ url }: { url: string }) => {
  const data = await client.fetch(`${url}{
            _id,
            title,
            publishedAt,
            mainImage,
            body,
            slug,
            "categories": categories[]->title,
            "author": author->{name, image} 
          }`);
  return (
    <section className="px-8 py-12 flex flex-col gap-12 font-poppins bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.map((post: any) => {
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
                    className={`bg-opacity-90  ${post.categories === "Agentic AI" ? "bg-pink-400" : "bg-green-400"} absolute top-2 right-2 z-10 w-fit rounded-full px-3`}
                  >
                    <p className="text-white">{post.categories}</p>
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
                  {/* <Link href=""> */}
                  <div className="flex items-center gap-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={urlFor(post.author.image.asset._ref)}
                      alt=""
                    />
                    <p className="text-[22px] font-bold">{post.author.name}</p>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

BlogItems.defaultProps = {
  url: `*[_type == 'post']`,
};
export default BlogItems;
