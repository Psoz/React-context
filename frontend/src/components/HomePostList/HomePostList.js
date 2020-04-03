import React, {useContext, useEffect,useState}  from 'react';
import PostContext from '../../context/Post';
import PostList from '../PostList';
import {
    useParams
  } from "react-router-dom";
  import {ButtonAddPost} from '../PostList/AddPost';

const HomePostList = () => {
  console.log('entrei');
  const { posts } = useContext(PostContext);
  const [myposts,setmyposts] = useState(posts);
  const { category,id } = useParams();

  useEffect(() => {
    setmyposts(posts);

    if(id) {
      setmyposts(posts.filter(post => post.id === id));
    }
    
    if(category) {
      setmyposts(posts.filter(post => post.category === category));
    }

  },[posts,category,id]);

    
  return(
    <div>
      <PostList posts={myposts}/>
      <ButtonAddPost/>
    </div>
  )
}

export default HomePostList;