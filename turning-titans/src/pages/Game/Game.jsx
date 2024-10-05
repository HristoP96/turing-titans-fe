import React, { useState } from 'react'
import './Game.css'
import Box from '@mui/material/Box';

import StoryText from '../../components/StoryText/StoryText';
import Options from '../../components/Options/Options';

// const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!';

const Game = () => {
  const [storyText, setStoryText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus');
  const [animationKey, setAnimationKey] = useState(0);
  const [ onFullTextDisplayed, setOnFullTextDisplayed ] = useState(false);

  const [options, setOptions] = useState(['Take the gold and run', 'Made a rude gesture with your middle finger', 'Spit on the slaves', 'Quit'
  ]);

  const onClick = () => {
    setStoryText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!');
    setOptions(['Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a earum impedit ducimus, fugiat minus eum tempora nihil quo debitis incidunt aut enim qui, vitae cupiditate inventore harum. Enim, quas!']);
    setAnimationKey(prev => prev + 1);
    setOnFullTextDisplayed(false);
  };

  const onDone = () => {
    setOnFullTextDisplayed(true);
  };

  return (
    <Box sx={{ padding: '10rem 40rem', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center', alignItems: 'center' }}>
      <StoryText text={storyText} onDone={onDone}/>
      {onFullTextDisplayed && <Options onClick={onClick} options={options} key={animationKey}/>}
    </Box>
  )
}

export default Game