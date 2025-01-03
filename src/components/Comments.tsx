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
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Comments:</h3>
      <ul>
        {comments.map(({ id, name, comment }) => (
          <li key={id}>
            <strong>{name}:</strong> {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentForm;
