import React from 'react';
import styled from 'styled-components';
import Score from '../components/Score'
import NumberSelector from './NumberSelector';
const Game = ({ toggle }) => {
  return (
    <MainContainer>
      <div className="Top-section">
        <Score />
        <NumberSelector />
      </div>

    </MainContainer>
  );
}

export default Game;

const MainContainer = styled.main`
.Top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

`