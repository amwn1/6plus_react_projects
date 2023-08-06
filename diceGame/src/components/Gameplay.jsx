import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice';

const Gameplay = () => {
  return (
      <Main>
      <div className="top_section">
     <TotalScore/>
     <NumberSelector/>
     </div>
     <RollDice/>
     </Main>
  
  );
};

export default Gameplay;

const Main = styled.main`

padding-top:70px;

  .top_section{
    display: flex;
    justify-content: space-around ;
    align-items: end;
  }
`
