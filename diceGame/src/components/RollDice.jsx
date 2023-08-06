import { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,roleDice}) => {


  
  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}>
      <img src={`/images/dices/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 48px;

   .dice{
    cursor: pointer;
   }

   p{
    font-size: 25px;
   }
`