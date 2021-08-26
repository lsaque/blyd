import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// import { Container } from './styles';

const Container = styled.View`
  background-color: #F01;
  height: 100%;
`;

export default function Search(){
  return(
    <Container>
      <Text> Search </Text>
    </Container>
  )
}
