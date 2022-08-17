import React from 'react';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageListItem';
import ImageListItem from '@mui/material/ImageListItem';

export default function Forgot(){
    return (
        <Container>
            <ImageList>
                <ImageListItem>
                    <img src="https://pbs.twimg.com/media/FC9SeGXUUAckPup?format=png&name=900x900" alt="Cursor meme" className="meme"/>
                </ImageListItem>
            </ImageList>
        </Container>
    )
}