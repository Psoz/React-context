import React  from 'react';
import styles from './Footer.module.scss';
import PostVote from './PostVote/PostVote';
import PostHandler from './PostHandler/PostHandler';

const Footer = ({postId,eventEndlers}) => {
      return(
        <div className={styles.wrapper}>
          <PostVote postId={postId}/>
          <PostHandler eventEndlers={eventEndlers}/>
        </div>
      )
}

export default Footer;