import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button } from "../styled/Button";
import { Outlined } from '../styled/Button'
import Rules from "./Rules";


const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError] = useState(" ")
  const[showRules,setShowRules] = useState(true)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selectedNumber){ 
      setError("You have not selected any number");
      return; }

      
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  
  const reset = () => {
    setScore(0);
  }

  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        setError = {setError}
          error = {error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice roleDice={roleDice} currentDice={currentDice} />
      <div className="btns">
        <Outlined onClick={reset}> Game Reset</Outlined>
        <Button
        onClick={() => setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} rules</Button>
      </div>
     {showRules && <Rules/>} 
    </Main>
  );
};

export default Gameplay;


const Main = styled.main`
  padding-top: 35px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
   gap: 10px;
  }
`;
