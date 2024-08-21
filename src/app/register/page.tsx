"use client";
import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import ContactForm from '@/component/register/ContactForm';
import theme from '@/theme';

const Register: React.FC = () => {

    return (
        <Box
            id="foo"
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    paddingLeft: '16px',
                    zIndex: 1,
                }}
            >
                <Typography variant="h2" component="div" sx={{
                    fontWeight: theme.typography.fontWeightBold,
                    color: theme.palette.common.black,
                }}>
                    The<br />
                    Next Step<br />
                    In Your Dancers<br />
                    Journey.<br />
                </Typography>

                <Typography component="div" sx={{
                    color: theme.palette.common.black,
                    fontWeight: theme.typography.fontWeightLight,
                    pt: 5,
                }}>
                    EEDancestudio@gmail.com
                    <br />
                    <br /> 82 Bethany Rd #7, <br />
                    Hazlet, NJ 07730
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    right: '10%',
                    top: '50%',
                    left: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    height: '70%', 
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <ContactForm/>
            </Box>
        </Box>
    );
};

export default Register;