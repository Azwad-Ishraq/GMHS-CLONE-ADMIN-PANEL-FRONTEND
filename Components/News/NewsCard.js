import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const NewsCard = ({news}) => {

    const {title,img} = news;


    return (
<Card sx={{ maxWidth: 345 }}>
     
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="News"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {title}
        </Typography>
      </CardContent>
      
     
    </Card>
    );
};

export default NewsCard;