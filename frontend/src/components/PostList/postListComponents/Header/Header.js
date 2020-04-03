import React  from 'react';
import styles from './Header.module.scss';

const Header = ({commentNum, score}) => {
      return(
        <div className={styles.wrapper}>
          <div><span>Comments:</span>{commentNum }</div>
          <div><span>Score:</span>{score }</div>
        </div>
      )

}

export default Header;