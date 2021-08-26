import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color:#8749FC;

  width: 100%;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color:#FFF;
  font-size: 16px;
`;

export default ({text, onPress} : any) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}