import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts"

import useStyles from "./styles"

function Form() {
    const [postData, setPostdata] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {

    }

    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" onInvalid className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography varient="h6">Create a Memory</Typography>
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostdata({ ...postData, creator: e.target.value })} />
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostdata({ ...postData, title: e.target.value })} />
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostdata({ ...postData, message: e.target.value })} />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostdata({ ...postData, tags: e.target.value })} />
                    <div className={classes.fileInput}>
                        <FileBase type="file" multple={false} onDone={({ base64 }) => setPostdata({ ...postData, selectedFile: base64 })} />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </>
    )
}

export default Form
