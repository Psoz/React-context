import CommentsContext from "./CommentsContext";
import React, { useState, useContext } from 'react';
import {host,headers} from "../../utils";
import axios from 'axios';
import ModalContext from "../Modal";
import { v4 as uuidv4 } from 'uuid';

const CommentsProvider = ({children}) => {

    const [comments,setComments] = useState({});
    const {closeModal} = useContext(ModalContext);

    const getComments = async (id) => {
        await axios.get(host + `posts/` + id + `/comments`,headers)
        .then(res => {
            setComments({...comments,
                [id]:res.data,
            })
            
        });
    }

    const updateComment = async (commentId,postId,info) => {
      await axios.put(host + `comments/`+ commentId,info,headers)
      .then(() => {
        getComments(postId);
        closeModal('globalModal');
      })
      
  }

  const deleteComment = async (commentId,postId) => {
      await axios.delete(host + `comments/`+commentId,headers)
      .then(() => {
        getComments(postId);
      })
  }

  const AddComment = async ({postId},{body, author}) => {
    console.log(postId,body,author);
    const comment = {
        id: uuidv4(),
        timestamp:new Date(),
        body,
        author,
        parentId :postId ,
    };
    await axios.post(host + `comments`,comment,headers)
    .then(() => {
      getComments(postId);
      closeModal('globalModal');
    })
    
} 


  const context = {
    getComments,
    comments,
    updateComment,
    deleteComment,
    AddComment
  }


    return <CommentsContext.Provider value={context}>{children}</CommentsContext.Provider>;
}

export default CommentsProvider;