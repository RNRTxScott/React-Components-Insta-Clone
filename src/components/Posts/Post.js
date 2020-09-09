import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  // const { post, likePost } = props;
  console.log(props)
  return (
    <div className='post-border'>
      <PostHeader
        username={props.username}
        thumbnailUrl={props.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => props.likePost(props.id)} />
      {/* Comments also wants its props! */}
      <Comments comment={()=> props.Comments(props.id)}/>
    </div>
  );
};

export default Post;
