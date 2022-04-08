import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Waifus from '../interfaces/Waifus';
import { CardMedia } from '@mui/material';

export default function WaifuCard(props: WaifuCardProps) {
  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ maxWidth: 100, maxHeight: 100}}
            component="img"
            image={props.Waifus.images.jpg.image_url}
            alt={props.Waifus.name}
        />
        <CardContent>
            <Typography variant="h5" component="div">
                {props.Waifus.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.Waifus.name_kanji}
            </Typography>
        </CardContent>  
    </Card>
  );
}

type WaifuCardProps = {
    Waifus: Waifus
}


