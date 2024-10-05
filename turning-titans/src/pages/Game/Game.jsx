import React, { useState } from 'react'
import './Game.css'
import Box from '@mui/material/Box';

import StoryText from '../../components/StoryText/StoryText';
import Options from '../../components/Options/Options';

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!';

const Game = () => {
  const [isSelected, setIsSelected] = useState(false);

  const options = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!'
]

  const onClick = () => {
    setIsSelected(true);
  };

  return (
    <Box sx={{ padding: 40, textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center', alignItems: 'center' }}>
      {!isSelected ? <StoryText text={text} /> : null}
      <Options onClick={onClick} options={options} />
    </Box>
  )
}

export default Game