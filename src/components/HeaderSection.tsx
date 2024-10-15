import React from 'react';
import { Stack } from '@mui/material';
import img1 from './Assets/12.jpg';
import img2 from './Assets/15.jpg';
import img3 from './Assets/11.jpg';

const HeaderSection = () => {
  return (
    <Stack spacing={2} alignItems="center" className='space-y-24'>
      <Stack className='mt-24'>
        <h1 className='text-6xl font-medium text-center' style={{color: '#0B132B', fontFamily: 'SUSE'}}>Welcome to Desert Corner</h1>
        <p className='text-lg font-normal text-center' style={{color: '#0B132B'}}>Our mission is to provide a desert-inspired culinary experience.</p>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2}
        alignItems={{ xs: 'center', sm: 'flex-start' }} 
        justifyContent={{ sm: 'center' }}
        sx={{ width: '100%' }} 
      >
        <img
          src={img1}
          alt='Main'
          style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'cover' }}
        />
        <Stack direction="column" spacing={2} alignItems="center">
          <img
            src={img2}
            alt='Side'
            style={{ width: '100%', maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
          />
          <img
            src={img3}
            alt='Side'
            style={{ width: '96%', maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeaderSection;
