import React, { useEffect, useState } from "react";
import "./Game.css";
import Box from "@mui/material/Box";
import { post } from "../../services/request";
import StoryText from "../../components/StoryText/StoryText";
import Choices from "../../components/Choices/Choices";
import { Button } from "@mui/material";
import Success from "../Success/Success";
import Loss from "../Loss/Loss";

const gameBoxStyles = {
  padding: "10rem 40rem",
  textAlign: "justify",
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  justifyContent: "center",
  alignItems: "center",
};

const BE_URL = process.env.REACT_APP_BE_URL;
const Game = () => {
  const [gameLevel, setGameLevel] = useState(1);
  const [threadId, setThreadId] = useState(null);
  const [title, setTitle] = useState("");
  const [storyText, setStoryText] = useState("");
  const [animationKey, setAnimationKey] = useState(0);
  const [onFullTextDisplayed, setOnFullTextDisplayed] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [outcome, setOutcome] = useState("");
  const [options, setOptions] = useState([]);
  const [windGame, setWinGame] = useState(false);
  const [loseGame, setLoseGame] = useState(false);
  const [temp, setTemp] = useState({})


  useEffect(() => {
    post(`${BE_URL}/start-game`).then((res) => {
      setTitle(res.response.stage_header);
      setStoryText(res.response.scenario);
      setOptions([
        res.response.option1,
        res.response.option2,
        res.response.option3,
        res.response.option4,
      ]);
      setThreadId(res.thread_id);
    });
  }, []);

  useEffect(() => {
    if(Object.keys(temp).length > 0) {
      setTitle(temp.stage_header);
      setStoryText(temp.scenario);
      setOptions([
        temp.option1,
        temp.option2,
        temp.option3,
        temp.option4,
      ]);
      setFeedback('')
      setOutcome('')
      setTemp({})
    }
  }, [gameLevel]);


  const onClick = (option) => {
    setOptions([
    ]);
    setStoryText('');
    setTitle('');

    post(`${BE_URL}/select-option`, {
      thread_id: threadId,
      option: option + 1,
    }).then((res) => {
      if (res.successful_option) {
        setFeedback(res.response.feedback)
        setOutcome(res.response.outcome)
        setTemp(res.response)
      } else if (res.response.win_game) {
        setWinGame(true)
        setFeedback(res.response.feedback)
        setOutcome(res.response.outcome)
      } else if (res.response.lose_game) {
        setLoseGame(true)
        setFeedback(res.response.feedback)
        setOutcome(res.response.outcome)
      }
      setAnimationKey((prev) => prev + 1);
      setOnFullTextDisplayed(false);
    });
  };

  const handleTextDisplayComplete = () => {
    setOnFullTextDisplayed(true);
  };

  return (
    <>
    {windGame && <Success feedback={feedback} outcome={outcome} />}
    {loseGame && <Loss feedback={feedback} outcome={outcome} />}
    { !loseGame && ! windGame &&
      <Box sx={gameBoxStyles}>
      <h1>{title}</h1>
      {!storyText && feedback && (
        <>
        <h3>Feedback</h3>
        <StoryText
            text={outcome}
            handleTextDisplayComplete={handleTextDisplayComplete}
          />
          <h3>Outcome</h3> 
          <StoryText
            text={feedback}
            handleTextDisplayComplete={handleTextDisplayComplete}
          />
            <Button title="Test" className="next-stage" onClick={() => setGameLevel(prev => ++prev)}>Next stage</Button>
        </>
      )}
      {storyText ? (
        <>
          <StoryText
            text={storyText}
            handleTextDisplayComplete={handleTextDisplayComplete}
          />
          {onFullTextDisplayed && (
            <Choices onClick={onClick} options={options} key={animationKey} />
          )}
        </>
      ) : <>Loading...</>}
    </Box>
    }
    </>
  );
};

export default Game;
