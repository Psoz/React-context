import React, {useContext}  from 'react';
import styles from './CommentVote.module.scss';
import VoteContext from '../../../../../../context/Vote';

const CommentVote = ({commentId,postId}) => {

  const {commentVote} = useContext(VoteContext);

  const handleClick = async (value) => {
    await commentVote(commentId,postId,value);
  }

  const svg = (fill,title,rotate=false) => {
    
   const transformStyle = rotate ? {transform: `rotate(180deg)`} : {}
    return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 273" className={styles.svg} style={{...transformStyle}}>
    <title>{title}</title>
  <defs/>
  <g fill={fill} stroke="#1c4d1d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" color="#000">
    <path d="M29 126c8-5 23 1 33-3 19-8 41-36 50-42 15-13 29-18 37-34 4-9 10-29 19-38 2-2 7-4 10-4 7 1 11 6 15 12 4 4 6 10 6 17-1 21-25 36-31 57-2 7-7 17-2 24 6 8 33 6 48 14 9 4 20 9 25 19 4 7 3 17 0 25-2 6-9 7-11 14-2 6 2 13-1 20s-14 9-18 16c-3 4-1 8-5 13-6 6-14 5-20 12-4 3-7 10-11 14-6 5-16 6-24 6-10-1-15-5-25-5-9-1-21 2-30 0-21-7-32-31-51-44-7-6-20 1-27-5-12-11-12-30-10-46 2-17 8-35 23-42z"/>
    <path d="M224 187s-28 7-40 3c-16-6-24-13-40-21-3-1-5-8-3-10 5-8 16-12 26-13 11-1 24 8 33 10 3 1 10-1 10-1M206 221c0-1-24 1-38-4-13-4-20-11-43-21-10-4-4-8-2-11 3-8 18-17 18-17M183 247s-20-1-28-5c-13-7-29-13-41-20-4-2-4-8-2-12 1-6 12-13 12-13M148 267s-34-11-43-20c-3-2-1-9 0-12 2-6 10-10 10-10"/>
  </g>
</svg>)}

      return(
        <div className={styles.wrapper}>
          <div onClick={() => handleClick("upVote")}>
            {svg("#3c9a50","up vote")}
          </div>
          <div onClick={() => handleClick("downVote")}>
            {svg("#a00","down vote",true)}
          </div>
          
        </div>
      )

}

export default CommentVote;