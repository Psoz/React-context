import React  from 'react';
import styles from './Body.module.scss';

const Body = ({title, author, body}) => {
  console.log('body',body);
      return(
        <div className={styles.wrapper}>
          <h4><span>Title: </span>{title}</h4>
          <h5><span>Author: </span>{author}</h5>
          <p><span>Body:</span> {body}</p>
        </div>
      )

}

export default Body;