import PostContext from "./PostContext";
import React, { useState,useEffect,useContext } from 'react';
import {host,headers} from "../../utils";
import axios from 'axios';
import ModalContext from '../Modal';
import { v4 as uuidv4 } from 'uuid';

const PostProvider = ({children}) => {

    const [posts,setPosts] = useState([]);
    const [sort,setsort] = useState("");
    const {closeModal} = useContext(ModalContext);

    useEffect(() => {
        loadPosts();
    },[]);

    const loadPosts = async () => {
        await axios.get(host + `posts`,headers)
        .then(res => {
            setPosts(res.data);
        })
    }

    const setSort = (sortValue) => {
        console.log('sort', sortValue, sort);
        setsort(sortValue);
        
    }

    const AddPost = async ({title, body, author,category }) => {
        console.log(title,body,author,category);
        const post = {
            id: uuidv4(),
            timestamp:new Date(),
            title,
            body,
            author,
            category ,
        };
        await axios.post(host + `posts`,post,headers)
        .then(() => {
            loadPosts();
            closeModal('globalModal');
        })
        
    }


    const updatePost = async (id, info) => {
        await axios.put(host + `posts/`+ id,info,headers)
        .then(() => {
            loadPosts();
            closeModal('globalModal');
        })
        
    }

    const deletePost = async (id) => {
        console.log('hello');
        await axios.delete(host + `posts/`+id,headers)
        .then(() => {
            loadPosts();
        })
    }

  const context = {
      getPosts:loadPosts,
      setSort,
      posts,
      sort,
      AddPost,
      deletePost,
      updatePost,
  }

  


    return <PostContext.Provider value={context}>{children}</PostContext.Provider>;
}

export default PostProvider;