import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [replies, setReplies] = useState(comment.replies || []);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, { text: replyText, replies: [] }]);
      setReplyText('');
      setShowReplyBox(false);
    }
  };

  return (
    <div style={{ marginLeft: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <p style ={{color:"white"}}>{comment.text}</p>
      <button onClick={() => setShowReplyBox(!showReplyBox)}>
        {showReplyBox ? 'Cancel' : 'Reply'}
      </button>
      {showReplyBox && (
        <div>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button onClick={handleReply}>Submit</button>
        </div>
      )}
      {replies.map((reply, index) => (
        <Comment key={index} comment={reply} />
      ))}
    </div>
  );
};

export default Comment;
