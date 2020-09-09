import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({likePost, posts}) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // const  {likePost, posts} = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post, index) => (
        <Post key={index} props={post} blackKnight='Im not Dead Yet!' likePost={likePost} />
      ) )}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
