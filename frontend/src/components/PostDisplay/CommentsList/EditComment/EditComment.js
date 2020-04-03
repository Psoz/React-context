import React  from 'react';
import CommentEdit from './Components/CommentEdit';
import CommentVote from './Components/CommentVote';

const EditComment = ({commentId,postId}) => {
      return(
        <div>
          <CommentVote commentId={commentId} postId={postId}/>
          <CommentEdit commentId={commentId} postId={postId}/>
        </div>
      )
}

export default EditComment;