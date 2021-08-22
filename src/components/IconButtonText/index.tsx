import React from 'react';
import styled from 'styled-components/native';

const ButtonArea = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #FFF;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  margin-top: 20px;
  padding: 0 20px;
  align-items: center;
`;

const TextButton = styled.Text`
  font-size: 15px;
  color: #4A4A4A;
`;

const IconButton = styled.Text``;

export default ({text, icon, onPress} : any) => {
  return (
    <ButtonArea onPress={onPress}>
      <TextButton>
        {text}
      </TextButton>
      <IconButton>
        {icon}
      </IconButton>
    </ButtonArea>
  );
}