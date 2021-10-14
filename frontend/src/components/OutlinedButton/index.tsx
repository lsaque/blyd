import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: transparent;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

const ButtonText = styled.Text`
  color:#8749FC;
  font-size: 16px;
`;

export default ({text, onPress, accessibilityHint} : any) => {
  return (
    <Button 
      onPress={onPress}
      accessibilityHint={accessibilityHint}
    >
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}