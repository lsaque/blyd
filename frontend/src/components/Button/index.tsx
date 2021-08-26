import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`

  width: 100%;
  height: 60px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
`;

export default ({text, filled, onPress, backgroundColor} : any) => {

  let bgColor = backgroundColor;
  let textColor = '#4A4A4A';

  if (!filled) {
    textColor = bgColor
    bgColor = 'transparent'
  }

  return(
    <Button 
      onPress={onPress}
      style={{
        backgroundColor: bgColor
      }}
    >
      <ButtonText 
        style={{
          color: textColor,
        }}
      >
        {text}
      </ButtonText>
    </Button>
  )
}