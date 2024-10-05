import React from 'react';
import Typewriter from 'typewriter-effect';
import Typography from '@mui/material/Typography';

const StoryText = ({ text, onDone }) => {

  return (
    <Typography
      variant="h6"
      sx={{
        color: '#fffff',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        maxWidth: '900px',
        minWidth: '900px',
        backgroundColor: '#000',
        padding: '2rem',
        border: '2px solid #f3d22d',
        fontFamily: 'inherit'
      }}
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .callFunction(() => {
              onDone()
            })
            .start();
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 40,
          cursor: '' 
        }}
      />
    </Typography>
  );
};

export default StoryText;
