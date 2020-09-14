import React from 'react';

import './Comments.css';


const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
   const { comments } = props;

  return (
    <div> comments
      {/* { {props.comments} } */}
    </div>
  );
};

export default Comments;
