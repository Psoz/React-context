import React, {useContext} from 'react';
import AddPostForm from '../AddPostForm';
import ModalContext from '../../../../context/Modal';
import PostContext from '../../../../context/Post';
import styles from './ButtonAddPost.module.scss';

const ButtonAddPost = () => {
  const { openModal } = useContext(ModalContext);
  const { AddPost } = useContext(PostContext);

  const forms = {
    elements:[
    {type:"text",name:"title",placeholder:"Title"},
    {type:"text",name:"body",placeholder:"Body"},
    {type:"text",name:"author",placeholder:"Author"},
    {type:"radio",name:"category"}]
  }

      return (
        <>
          <button className={styles.button} onClick={()=>openModal('globalModal',<AddPostForm forms={forms} eventHandler={AddPost}/>)}>Add post</button>
          
        </>
      )
  }
  
  export default ButtonAddPost;