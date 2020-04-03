import React, {useContext} from 'react';
import PostContext from '../../../../context/Post';
import {sort as sortVariables} from '../../../../utils';
import c from "classnames";
import styles from './Sort.module.scss';

const Sort = () => {
    const { setSort,sort } = useContext(PostContext);

    const handleClick = (sortValue) => {
        isActive(sortValue) ? setSort("") : setSort(sortValue);
    }

    const isActive = (sortValue) => (sortValue === sort);
    

    const sortComponent = (label, sortVariable) => {
        return  <div className={c(styles.sort,{
            [styles.isActive]:isActive(sortVariable),
        })} onClick={()=> handleClick(sortVariable)}>{label}</div>
    }

      return (
        <div>
            <div>Sort</div>
            <div className={styles.wrapper}>
                {sortComponent("By Vote", sortVariables.byVote)}
                {sortComponent("By Date", sortVariables.byDate)}
            </div>
        </div>
      
      )
  }
  
  export default Sort;