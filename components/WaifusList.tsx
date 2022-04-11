import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Anime from '../interfaces/Anime';

export default function WaifuCard(props: PropTypes) {
  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ maxWidth: 100, maxHeight: 100}}
            component="img"
            image={props.anime.coverImage?.large}
            alt={props.anime.title?.romaji}
        />
        <CardContent>
            <Typography variant="h5" component="div">
                {props.anime.title?.native}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.anime.title?.romaji}
            </Typography>
        </CardContent>  
    </Card>
  );
}

interface PropTypes {
    anime: Anime
}
