import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';
import ImageList from '@mui/material/ImageListItem';
import ImageListItem from '@mui/material/ImageListItem';

function About() {
    return (
        <>
            <Container display="flex" alignSelf="center">
                <Paper variant="normal" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        About Us
                    </Typography>
                </Paper>
            </Container>
            <Container display="flex" alignSelf="center">
                <Paper variant="normal" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        SUNFLOWER plants one sunflower for every blog post created!
                    </Typography>
                </Paper>
            </Container>
            <Container>
            <ImageList>              
                <ImageListItem>
                    <img src="https://hummingbird-acres.com/wp-content/uploads/2021/07/sunflowers-16-1140x684.jpg" alt="A row of potted sunflowers" margin="10" />
                </ImageListItem>
                </ImageList>
            </Container>
            <br />
            <Copyright />
        </>
    )
}

export default About;