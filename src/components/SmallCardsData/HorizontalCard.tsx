import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface HorizontalCardProps {
  image: string;
  title: string;
  description: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button size="medium" variant='contained' sx={{ margin: 1 , backgroundColor:'#05668D'  }}>Select</Button>
    </Card>
  );
};

export default HorizontalCard;
