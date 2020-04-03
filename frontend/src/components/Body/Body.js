import React from 'react';
import {
    Switch,Route
  } from "react-router-dom";
  import PostDisplay from '../PostDisplay';
  import HomePostList from '../HomePostList';

const Body = () => {
      return (
          <>
            <Switch>
                <Route path="/:category/:id" children={<PostDisplay />} /> 
                <Route path="/:category" children={<HomePostList />} /> 
                <Route path="/" children={<HomePostList />} /> 
            </Switch>
        </>
      )
  }
  
  export default Body;