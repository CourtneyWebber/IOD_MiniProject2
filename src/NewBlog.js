import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Copyright from './Copyright';

function NewBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [imageLabel, setImageLabel] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post('http://localhost:3100/posts', {            
            title: title,
            date: new Date().toLocaleString(),
            image_label: imageLabel,
            image_url: image,
            description: description
        })
            .then(response => {
                alert(`${response} added`);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleImageChange = (event) => {
        const [imageFile] = event.target.files;
        setImage(URL.createObjectURL(imageFile));
    }

    return (
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Create Blog
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="description"
                                name="description"
                                label="Content"
                                fullWidth
                                multiline
                                rows={12}
                                variant="standard"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="imageName"
                                name="imageName"
                                label="Image title"
                                fullWidth
                                variant="standard"
                                value={imageLabel}
                                onChange={(e) => setImageLabel(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input name="imageInput" type="file" onChange={handleImageChange} />
                            <img src={image} alt={imageLabel} width="150px" height="auto" onChange={(e) => setImageLabel(e.target.value)} />
                            <Grid item xs={12}>
                                <Button onClick={() => navigate('/')}>Back</Button>
                                <Button type="submit" onClick={handleSubmit}>Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>            
            <Copyright />
        </Container>
    )
}

export default NewBlog;