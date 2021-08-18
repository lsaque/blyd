import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

export default () => {
  return (
    <React.Fragment>
      <StatusBar style="auto"/>
      <Container>
        <Text>SignIn</Text>
      </Container>
    </React.Fragment>
  );
}