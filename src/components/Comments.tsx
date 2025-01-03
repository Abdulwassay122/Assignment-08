"use client"
import React, { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  comment: string;
}

function CommentForm() {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !comment) {
      alert('Please fill in both fields.');
      return;
    }

    const newComment: Comment = { id: Date.now(), name, comment };
    setComments([...comments, newComment]);

    setName('');
    setComment('');
  };

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
      <h3 className="text-lg font-semibold mt-6">Comments:</h3>
      <ul className="mt-4 space-y-2">
        {comments.map(({ id, name, comment }) => (
          <li key={id} className="p-4 border border-gray-200 rounded-lg">
            <strong>{name}:</strong> {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentForm;
