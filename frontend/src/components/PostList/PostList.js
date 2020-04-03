import React, { useState,useContext,useEffect }  from 'react';
import Post from './postListComponents/Post/Post';
import styles from './PostList.module.scss';
import PostContext from '../../context/Post';
import {sortBy} from '../../utils';

const PostList = ({posts:initialPosts}) => {
  const { sort } = useContext(PostContext);
  const [posts, setposts] = useState(initialPosts);

  useEffect(() => {
    setposts(initialPosts);
  },[initialPosts]);

  useEffect(() => {
    setposts(sortBy(posts,initialPosts,sort));
    // eslint-disable-next-line
  },[sort]);

  if(!posts.length){
    return (<div className={styles.noPosts}>No posts to display</div>);
  }
      return(
        <div className={styles.wrapper}>
          {posts.map((post)=> (
              <Post key={post.id}  {...post}/>
           ))}
        </div>
      )
}

export default PostList;