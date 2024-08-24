// components/SocialSidebar.tsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

interface SocialSidebarProps {
  color: 'white' | 'black';
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ color }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 3,
      }}
    >
      <Box
        sx={{
          width: '2px',
          height: '80px',
          backgroundColor: color,
          mb: 2,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconButton
          component="a"
          href="https://www.instagram.com/essentialelementsds"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          sx={{
            p: 1,
          }}
        >
          <InstagramIcon sx={{ fontSize: 50, color }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.facebook.com/Essentialelementsds"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{
            p: 1,
          }}
        >
          <FacebookIcon sx={{ fontSize: 50, color }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: '2px',
          height: '30px',
          backgroundColor: color,
          mt: 2,
        }}
      />
    </Box>
  );
};

export default SocialSidebar;
