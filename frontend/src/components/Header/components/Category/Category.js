import React from 'react';
import {
    Link
  } from "react-router-dom";

const Category = ({name,path,className}) => {
      return (
      <Link className={className} to={`/` + path}>{name}</Link>
      )
  }
  
  export default Category;