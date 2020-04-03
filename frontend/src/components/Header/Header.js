import React, {useContext,useState,useEffect} from 'react';
import {
  NavLink 
  } from "react-router-dom";
import styles from './Header.module.scss';
import CategoryContext from '../../context/Category';
import Category from './components/Category';
import Sort from './components/Sort';

const Header = () => {

  const { categories : categoriesContext } = useContext(CategoryContext);
  const [categories,setmycategories] = useState(categoriesContext);
  useEffect(() => {
    setmycategories(categoriesContext)
  },[categoriesContext]);
      return (
        <>
        <div className={styles.wrapper}>
          <NavLink className={styles.link} to={`/`}>Home</NavLink >
          {categories.map((category)=> (
                <Category key={category.name} className={styles.link}  {...category}/>
            ))}
        </div>
        <div className={styles.wrapper}>
          <Sort/>
        </div>
      </>
      )
  }
  
  export default Header;