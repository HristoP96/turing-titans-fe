import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Typography from '@mui/material/Typography';

const StoryText = ( { text }) => {

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
      border: '2px solid #f3d22d'
    }}
  >
    <Typewriter
      words={[text]}
      loop={1}
      cursor
      cursorStyle=""
      typeSpeed={20}
      deleteSpeed={0}
      delaySpeed={1}
      onType={(count) => {console.log(count);
      }}
    />
  </Typography>
  )
}

export default StoryText