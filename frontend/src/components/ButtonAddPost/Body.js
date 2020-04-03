import React from 'react';
import {
    Switch,Route
  } from "react-router-dom";
  import PostDisplay from '../../PostDisplay';
  import CategoryPostList from '../../CategoryPostList';
  import HomePostList from '../../HomePostList';
  import ButtonAddPost from '.';

const Body = () => {
      return (
        <Switch>
            <Route exact path="/">
            <HomePostList/>
            </Route>
            <Route path="/post/:id" children={<PostDisplay />} />
            <Route path="/category/:category" children={<CategoryPostList />} />
        </Switch>
        <ButtonAddPost>
      )
  }
  
  export default Body;