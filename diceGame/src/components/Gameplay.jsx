import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice';

const Gameplay = () => {
  const [selectedNumber , setSelectedNumber] = useState();

  return (
      <Main>
      <div className="top_section">
     <TotalScore/>
     <NumberSelector
     selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}
     />
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
