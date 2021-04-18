import React from 'react'
import Post from './Post/Post'
import {useSelector} from "react-redux";

import useStyles from "./styles"

function Posts() {
    const classes = useStyles();

    const posts = useSelector(state => state.posts);
    console.log(posts)
    
    return (
        <>
            <Post />
            <h1>POSts</h1>
        </>
    )
}

export default Posts
