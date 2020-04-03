import CategoryContext from "./CategoryContext";
import React, { useState,useEffect } from 'react';
import {host,headers} from "../../utils";
import axios from 'axios';

const CategoryProvider = ({children}) => {

    const [categories,setcategories] = useState([]);

    useEffect(() => {
        loadCategories();
    },[]);

    const loadCategories = async () => {
        await axios.get(host + `categories`,headers)
        .then(res => {
            setcategories(res && res.data && res.data.categories);
        })
    }

  const context = {
      categories:categories,
  }


    return <CategoryContext.Provider value={context}>{children}</CategoryContext.Provider>;
}

export default CategoryProvider;