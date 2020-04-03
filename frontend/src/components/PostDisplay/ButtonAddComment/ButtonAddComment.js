import React, {useContext} from 'react';
import AddPostForm from '../../PostList/AddPost/AddPostForm';
import ModalContext from '../../../context/Modal';
import CommentsContext from '../../../context/Comments';
import styles from './ButtonAddComment.module.scss';

const ButtonAddComment = (postId) => {
  const { openModal } = useContext(ModalContext);
  const { AddComment } = useContext(CommentsContext);
console.log('Helllo');
  const forms = {
    elements:[
    {type:"text",name:"body",placeholder:"Body"},
    {type:"text",name:"author",placeholder:"Author"},]
  }

      return (
        <>
          <button className={styles.button} onClick={()=>openModal('globalModal',<AddPostForm forms={forms} eventHandler={(value)=>AddComment(postId,value)}/>)}>Add Comment</button>
        </>
      )
  }
  
  export default ButtonAddComment;