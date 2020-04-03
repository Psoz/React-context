import React, {useContext}  from 'react';
import styles from './CommentEdit.module.scss';
import ModalContext from '../../../../../../context/Modal';
import CommentsContext from '../../../../../../context/Comments';
import AddPostForm from '../../../../../PostList/AddPost/AddPostForm';


const CommentEdit = ({commentId,postId}) => {

  const { openModal } = useContext(ModalContext);
  const { updateComment,deleteComment } = useContext(CommentsContext);


  const forms = {
    elements:[
    {type:"text",name:"body",placeholder:"Body"}]
  }

      return(
        <div className={styles.wrapper}>
          <div onClick={()=> deleteComment(commentId,postId)} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-47 0 512 512" className={styles.svg}>
            <title>Edit Post</title>
              <defs/>
              <path d="M417 114l-11-33c-5-13-17-22-30-22h-95V28c0-15-13-28-28-28h-87c-16 0-28 13-28 28v31H43c-14 0-26 9-30 22L1 114a25 25 0 0024 34h12l26 321c2 24 22 43 46 43h205c24 0 44-19 46-43l26-321h7a25 25 0 0024-34zM168 30h83v29h-83zm162 437c0 8-7 15-16 15H109c-8 0-15-7-16-15L67 148h289zM32 118l9-28 2-1h333l1 1 9 28zm0 0"/>
              <path d="M283 466c8 0 15-6 15-14l14-271a15 15 0 00-30-1l-14 270c0 8 6 16 15 16zm0 0M121 452a15 15 0 0030-2l-15-270a15 15 0 10-30 1zm0 0M209 466c9 0 15-7 15-15V181a15 15 0 10-30 0v270c0 8 7 15 15 15zm0 0"/>
            </svg>
          </div>
          <div onClick={()=> openModal('globalModal',<AddPostForm forms={forms} eventHandler={(values)=>updateComment(commentId,postId,values)}/>)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469 469" className={styles.svg}>
            <title>Delete post</title>
              <defs/>
              <path d="M457 76l-64-64a44 44 0 00-61 0L46 302l-3 4L0 456a11 11 0 0014 13l149-43 5-2 289-287a42 42 0 000-61zM286 90l39 39-205 205-14-29c-2-4-6-6-10-6H79L286 90zM26 443l14-48 35 34-49 14zm123-35l-51 15-51-52 14-51h28l19 37 5 5 36 18v28zm22-18v-17c0-4-3-7-6-9l-30-15 205-205 40 39-209 207zm271-268l-47 46-94-93 47-47c8-8 22-8 30 0l64 64a21 21 0 010 30z"/>
            </svg>
          </div>
        </div>
      )

}

export default CommentEdit;