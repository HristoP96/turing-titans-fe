import React, { useState } from 'react'
import './Game.css'
import Box from '@mui/material/Box';

import StoryText from '../../components/StoryText/StoryText';
import Options from '../../components/Options/Options';

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus';

// const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!';

const Game = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [ onFullTextDisplayed, setOnFullTextDisplayed ] = useState(false);

  const [options, setOptions] = useState(['Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!'
  ]);

  const onClick = () => {
    if(!isSelected) {
      setIsSelected(true);
    }
    setOptions(['1', '2', '3', '4']);
    setAnimationKey(prev => prev + 1);
  };

  const onDone = () => {
    setOnFullTextDisplayed(true);
  };

  return (
    <Box sx={{ padding: '10rem 40rem', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center', alignItems: 'center' }}>
      {!isSelected && <StoryText text={text} onDone={onDone}/>}
      {onFullTextDisplayed && <Options onClick={onClick} options={options} key={animationKey}/>}
    </Box>
  )
}

export default Game