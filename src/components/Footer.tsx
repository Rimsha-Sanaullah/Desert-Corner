import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      height="40vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: '#05668D', color: theme.palette.common.white, padding: 3 }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Social Media Icons */}
        <Grid item>
          <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
            <PinterestIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
            <TwitterIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* Contact Info */}
      <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
        <p>Contact us: info@desertcorner.com</p>
        <p>Phone: (123) 456-7890</p>
      </Typography>
      {/* Copyright Notice */}
      <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
        <p>&copy; {new Date().getFullYear()} Desert Corner Website. All rights reserved.</p>
      </Typography>
    </Box>
  );
};

export default Footer;
