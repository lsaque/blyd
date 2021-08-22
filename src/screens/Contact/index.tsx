import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// import { Container } from './styles';

const Container = styled.View`
  background-color: #121;
  height: 100%;
`;

export default function Contact(){
  return(
    <Container>
      <Text> Contact </Text>
    </Container>
  )
}
