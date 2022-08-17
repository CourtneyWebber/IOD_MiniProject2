import * as React from 'react';
/*import PropTypes from 'prop-types';*/
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
/*import CardActionArea from '@mui/material/CardActionArea';*/
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Add from './plusIcon.png';

function FeaturedPost() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const navigateToNewBlog = () => {
        navigate('/newblog');
    }

    useEffect(() => {
        axios.get('http://localhost:3100/posts')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    return (
        <>
            <img className="add" alt="Add" src={Add} onClick={navigateToNewBlog} />
        <Container>            
            {posts.map(post =>
                <Grid item xs={12} md={6} key={post.id}>
                    <Card
                        sx={{
                            display: 'flex',
                            margin: 2                                
                            }}>
                            <CardContent sx={{ flex: 1 }} >
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                image={post.image_url}
                                alt={post.image_label}
                            />
                    </Card>
                </Grid>
            )}            
            </Container>
        </>
    )
}

//typechecking
//FeaturedPost.propTypes = {
//    post: PropTypes.shape({
//        id: PropTypes.number,
//        date: PropTypes.string.isRequired,
//        description: PropTypes.string.isRequired,
//        image: PropTypes.string,
//        imageLabel: PropTypes.string.isRequired,
//        title: PropTypes.string.isRequired,
//    })/*.isRequired,*/
//};

export default FeaturedPost;

//json-server --watch db.json --port 3100