import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
   const  {likePost, posts} = props;
   console.log('stufff',likePost)
  return (
    <div className='posts-container-wrapper'>
      {posts.map((post, index) => (
        // console.log('PostLog', post)
         <Post key={index} post={post} blackKnight='Im not Dead Yet!' likePost={likePost} numberOfLikes={post.likes} />
      ) )}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
