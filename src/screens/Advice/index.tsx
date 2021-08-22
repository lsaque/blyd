import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// import { Container } from './styles';

const Container = styled.View`
  background-color: #CCC;
  height: 100%;
`;

export default function Advice(){
  return(
    <Container>
      <Text> Advice </Text>
    </Container>
  )
}
