import React from 'react';
import Comments from './Comment';
import './Comments.css';
import '../Posts';

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div> comments
      {props.comments}
    </div>
  );
};

export default Comments;
