import React from 'react'
import styled from 'styled-components'
const StartGame = () => {
  return (
    <Container>
        <img src='/images/dices.png' alt='dice image' />
        <div>
            <h1>
                DICE GAME
            </h1>
            <Button>Play now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
 max-width: 1180px;

`;
const Button = styled.button`
    
`;