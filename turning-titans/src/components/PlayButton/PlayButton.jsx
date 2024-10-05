import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 20,
    backgroundColor: 'orange', 
    '&:hover': {
        backgroundColor: 'darkorange', 
    },
}));

export default function CustomizedButtons() {
    return (
        <Stack spacing={2} direction="row">
            <ColorButton variant="contained"><Link to={'/game'}>PLAY</Link></ColorButton>
        </Stack>
    );
}