import React, {useContext,useState,useEffect} from 'react';
import CommentsContext from '../../../context/Comments';
import styles from './CommentsList.module.scss';
import Comment from './Comment';
import EditComment from './EditComment';

const CommentsList = ({id}) => {
    const { getComments,comments:contextComments } = useContext(CommentsContext);
    const [comments,setcomments] = useState([]);
 
    useEffect(() => {
        getComments(id);
      },[]);

      useEffect(() => {
        setcomments(contextComments[id]);
      },[contextComments]);

    return(
        <div className={styles.wrapper}>
          <span>Comments:</span>
          {comments && comments.map((comment)=> (
            <div className={styles.innerWrapper}>
              <Comment key={comment.id} {...comment}/>
              <EditComment commentId={comment.id} postId={id}/>
            </div>
           ))}
        </div>
      )
}

export default CommentsList;