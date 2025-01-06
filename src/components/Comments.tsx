"use client"
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';

interface Comment {
  id: number;
  name: string;
  comment: string;
}

interface Comments {
  name: string;
  slug: string;
  comment: string;
  publishedAt: string;
}

function CommentForm({slug}:{slug:string}) {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const [data, setData] = useState<Comments[]>([]);


  useEffect(()=>{
    const apiFetch = async () =>{
      const dataa = await client.fetch(`*[_type == "comment" && slug == "${slug}"]{
    _type,
    name,
    slug,
    comment,
    publishedAt
}`)
setData(dataa)
    }
    apiFetch()
  },[])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(process.env.NEXT_PUBLIC_SANITY_API_TOKEN)

    if (!name || !comment) {
      alert('Please fill in both fields.');
      return;
    }

    const newComment: Comment = { id: Date.now(), name, comment };
    setComments([...comments, newComment]);

    setName('');
    setComment('');

    const newDocument = {
      _type: "comment",
      name: name,
      comment: comment,
      slug: slug,
      publishedAt: new Date().toISOString(),
    };

    await client.create(newDocument)

  };

  function timeAgo(date:string) {
    const now = new Date();
    const givenDate = new Date(date);
    const diffInMs = now.getTime() - givenDate.getTime();
  
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // Approximate
    const years = Math.floor(days / 365); // Approximate
  
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
  
  // Example usage:
  const normalDate = '2025-01-01T10:00:00Z'; // Replace with your date
  console.log(timeAgo(normalDate)); // Output: "X days ago" or similar
  
  return (
    <div className="md:w-[700px] sm:w-[610px] p-6 w-full">
      <h2 className="text-xl font-semibold text-center mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#2B2B2B] text-white font-medium py-2 px-4 rounded-lg  "
        >
          Submit
        </button>
      </form>
      <h3 className="text-lg font-semibold mt-6">Comments({data.length}):</h3>
      <ul className="mt-4 space-y-2">
        {comments.map(({ id, name, comment }) => (
          <li key={id} className="p-4 border border-gray-200 rounded-lg">
            <p className='text-sm text-gray-600'>{timeAgo(new Date().toISOString())}</p>
            <strong>{name}:</strong> {comment}
          </li>
        ))}
        {data.map((element, index) => (
          <li key={index} className="p-4 border border-gray-200 rounded-lg">
            <p className='text-sm text-gray-600'>{timeAgo(element.publishedAt)}</p>
            <strong>{element.name}:</strong> {element.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentForm;
