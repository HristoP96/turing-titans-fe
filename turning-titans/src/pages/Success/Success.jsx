import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import './Success.css';

const Success = (props) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
      navigate("/");
    }, 10000);
  });

  return (
    <>
      {showConfetti && <Confetti />}
      {showConfetti && <h1>You won! </h1>}
      {showConfetti && <p>{props.outcome}</p>}
      {showConfetti && <p>{props.feedback}</p>}
    </>
  );
};

export default Success;
