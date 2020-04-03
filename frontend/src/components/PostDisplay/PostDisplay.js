import React, {useContext, useEffect,useState}  from 'react';
import PostContext from '../../context/Post';
import styles from './PostDisplay.module.scss';
import {
  useParams
} from "react-router-dom";
import Post from '../PostList/postListComponents/Post';
import CommentsList from './CommentsList';
import ButtonAddComment from './ButtonAddComment';

const PostDisplay = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const [postInfo,setpostInfo] = useState({});
  
  useEffect(() => {
    setpostInfo(posts.find(post => post && post.id === id))
  },[posts,id]);

    console.log(postInfo);
    return (
    <div className={styles.wrapper}>
      <Post  {...postInfo} theme={{productDisplay:styles.PostDisplay,innerWrapper:styles.innerWrapper}}/>
      <CommentsList id={id}/>
      <ButtonAddComment postId={id}/>
    </div>
    )
}

export default PostDisplay;