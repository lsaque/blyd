import React from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';


const Container = styled.View`
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 15px;
`;

const Information = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 18px;
`;

export default ({numberAdvice, text} : any) => {
  return(
    <Container style={{elevation: 20}}>
      <Information>
        <Number>{numberAdvice} </Number>
        <Text>{text}</Text>
      </Information>
    </Container>
  );
}