import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: transparent;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color:#8749FC;
  font-size: 16px;
`;

export default ({text, onPress} : any) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}