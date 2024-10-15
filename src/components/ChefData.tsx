import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import chef1 from './Assets/chef1.jpg';
import chef2 from './Assets/chef2.jpg';

const ChefData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: { xs: 'center', lg: 'space-around' },
        alignItems: 'flex-start',
        width: { xs: '100%', lg: '60%' },
        height: 'auto',
        p: 3,
        gap: 2,
        bgcolor: 'rgba(5, 102, 141, 0.4)',
        borderRadius: 2,
        m: '0 auto',
      }}
    >
      <Card 
        variant="outlined" 
        sx={{ 
          width: { xs: '100%', lg: 320 }, 
          boxShadow: 1, 
          mb: { xs: 2, lg: 0 },
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 3,
          },
        }}
      >
        <CardMedia
          component="img"
          height="100px"
          image={chef1}
          alt="Chef 1"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ color: '#05668D', fontWeight: 'bold' }}>
            Chef Emma Collins
          </Typography>
          <Typography variant="body2">
            Renowned pastry chef known for exquisite desserts.
          </Typography>
        </CardContent>
      </Card>

      <Card 
        variant="outlined" 
        sx={{ 
          width: { xs: '100%', lg: 320 }, 
          boxShadow: 1,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 3,
          },
        }}
      >
        <CardMedia
          component="img"
          height="120px"
          image={chef2}
          alt="Chef 2"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ color: '#05668D', fontWeight: 'bold' }}>
            Chef Liam Patel
          </Typography>
          <Typography variant="body2">
            Expert in traditional cuisines, bringing classic flavors to modern dishes.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChefData;
