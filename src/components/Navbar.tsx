import React, { useState } from 'react';
import { Button, Drawer, List, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  // Toggle the drawer open/closed
  const handleDrawerToggle = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Drawer content with social media icons
  const drawerContent = (
    <List sx={{backgroundColor:'#05668D', height: '100%'}}>
      {[
        { icon: <FacebookIcon sx={{ color: 'white' }} />, href: 'https://www.facebook.com' },
        { icon: <PinterestIcon sx={{ color: 'white' }} />, href: 'https://www.pinterest.com' },
        { icon: <InstagramIcon sx={{ color: 'white' }} />, href: 'https://www.instagram.com' },
        { icon: <TwitterIcon sx={{ color: 'white' }} />, href: 'https://www.twitter.com' }
      ].map(({ icon, href }, index) => (
        <ListItem key={index} component="a" href={href} target="_blank" rel="noopener noreferrer">
          {icon}
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className="flex justify-between items-center py-3 px-5" style={{ backgroundColor: '#05668D' }}>
      <h1 className='text-2xl font-normal text-white' style={{ fontFamily: 'Dancing Script' }}>Desert Corner</h1>
      {/* Navigation for larger screens */}
      <ul className='hidden sm:flex gap-5'>
        {[
          { icon: <FacebookIcon sx={{ color: 'white' }} />, href: 'https://www.facebook.com' },
          { icon: <PinterestIcon sx={{ color: 'white' }} />, href: 'https://www.pinterest.com' },
          { icon: <InstagramIcon sx={{ color: 'white' }} />, href: 'https://www.instagram.com' },
          { icon: <TwitterIcon sx={{ color: 'white' }} />, href: 'https://www.twitter.com' }
        ].map(({ icon, href }, index) => (
          <li key={index}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline text-lg font-normal">
              {icon}
            </a>
          </li>
        ))}
      </ul>
      {/* Drawer button for smaller screens */}
      <div className='sm:hidden'>
        <IconButton onClick={handleDrawerToggle(true)} sx={{ color: '#fff' }}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor='left'
          open={drawerOpen}
          onClose={handleDrawerToggle(false)}
        >
          {drawerContent}
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
