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
    }}
  >
    <Typewriter
      words={[text]}
      loop={false}
      cursor
      cursorStyle=""
      typeSpeed={1}
      deleteSpeed={0}
      delaySpeed={1}
    />
  </Typography>
  )
}

export default StoryText