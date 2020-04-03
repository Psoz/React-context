import React  from 'react';
import styles from './Comment.module.scss';

const Comment = ({author,body,voteScore}) => {
    return (
        <div className={styles.wrapper}>
            <div><span>Author: </span>{author}</div>
            <div><span>Body: </span>{body}</div>
            <div><span>Votes:</span> {voteScore}</div>
        </div>
    
    )
}

export default Comment;