import React from 'react';
import styled from 'styled-components';
const Home = ({toggle}) => {
  return (
    <div>
      <Container>
        <div>
        <img src="/images/dice.png" alt="" />
        </div>
        
        <div className='content'>
            <h1>
                DICE GAME
            </h1>
            <Button onClick={toggle}>Play</Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
const Container = styled.div`
max-width: 1182px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content{
    h1{
        font-size: 96px;
        font-weight: 800;
    
    }
}
`


const Button = styled.button`
background-color: black;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
font-weight: bold;
margin-top: 20px;
transition: 0.4s background ease-in;
&:hover{
    background-color: #f40612;
    transition: 0.3s background ease-in;
}
`