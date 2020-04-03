import React, {useContext}  from 'react';
import styles from './Post.module.scss';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import PostContext from '../../../../context/Post';
import cx from 'classnames';
import {
  Link
} from "react-router-dom";

const Post = ({id,title,author,category,voteScore,commentCount,body,theme={}}) => {
  const { deletePost,updatePost } = useContext(PostContext);
  const postHandlers = {
    delete:()=>deletePost(id),
    update:(value)=>updatePost(id,value),
  }
    return(
      <div className={cx(theme.productDisplay,styles.post)}>
        <div className={cx(styles.innerWrapper, theme.innerWrapper)}>
          <Link className={styles.postLink} to={`/${category}/`+ id}>
            <Header commentNum={commentCount} score={voteScore}/>
            <Body title={title} author={author} body={body}/>
          </Link>
          <Footer postId={id} eventEndlers={postHandlers}/>
        </div>
      </div>
        
      )
}

export default Post;