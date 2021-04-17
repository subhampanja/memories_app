import React from 'react'
import Post from './Post/Post'

import useStyles from "./styles"

function Posts() {
    const classes = useStyles()
    
    return (
        <>
            <Post />
            <h1>POSts</h1>
        </>
    )
}

export default Posts
