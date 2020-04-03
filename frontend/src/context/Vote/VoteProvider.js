import VoteContext from "./VoteContext";
import React, {useContext} from 'react';
import {host,headers} from '../../utils/variables';
import axios from 'axios';
import PostContext from '../Post';
import CommentsContext from "../Comments";

const VoteProvider = ({children}) => {
    
    const { getPosts } = useContext(PostContext);
    const { getComments } = useContext(CommentsContext);

    const vote = async (id,voteOption) => {

        await axios.post(host + `posts/`+ id,{option:voteOption},headers)
        .then(() => {
          getPosts();
        })
    }

    const voteComment = async (id,postid,voteOption) => {
        await axios.post(host + `comments/`+ id,{option:voteOption},headers)
        .then(() => {
            getComments(postid);
        })
    }

    const context = {
        handleVote: vote,
        commentVote: voteComment,
    };
    
  
    return <VoteContext.Provider value={context}>{children}</VoteContext.Provider>;
}

export default VoteProvider;