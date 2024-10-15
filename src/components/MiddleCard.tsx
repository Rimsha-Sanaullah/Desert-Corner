import { Box, Typography, Divider } from '@mui/material';
import React from 'react';
import img1 from './Assets/17.jpg';

const MiddleCard = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },  // Vertical on small screens, horizontal on larger ones
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',  // Max width for the card
        height: 'auto',
        p: 2,
        boxShadow: 3,  // Add shadow for a card effect
        borderRadius: 2,  // Rounded corners
        m: 'auto',  // Center the card horizontally
        mt: 5,  // Add top margin for spacing
        bgcolor: 'background.paper',  // Background color for better visibility
      }}
    >
      {/* Image section */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },  // Full width on small screens, 50% on larger screens
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <img 
          src={img1} 
          alt='logo' 
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxWidth: '300px',  // Limit the image width
            borderRadius: 8,
          }} 
        />
      </Box>

      <Divider 
        orientation="vertical" 
        flexItem 
        sx={{ 
          display: { xs: 'none', md: 'block' },  // Only show on medium and larger screens
          mx: 2,  // Horizontal margin for spacing
          height: '250px',  // Fixed height
          alignSelf: 'center',  // Vertically center the divider
          bgcolor: '#05668D',  // Custom color (change to any hex, rgba, or theme color)
        }} 
    />


      {/* Typography section */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          textAlign: 'left',
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{color:'#05668D', fontWeight: 'medium'}} gutterBottom>
        Matcha Green Tea Cake
        </Typography>
        <Typography variant="body1">
        A delightful fusion of earthy matcha and light sweetness, this cake offers a unique flavor experience. Topped with creamy frosting, it's perfect for tea lovers and dessert enthusiasts alike.        </Typography>
      </Box>
    </Box>
  );
}

export default MiddleCard;
