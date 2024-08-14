import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleNewComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleNewComment}>Submit</button>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
