import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: #FFF;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  padding: 0 20px;
  align-items: center;
  /* margin-bottom: 18px; */
`;

const Input = styled.TextInput`
  font-size: 15px;
  color: #4A4A4A;
  /* margin-left: 10px; */
`;

export default ({text, icon, onPress} : any) => {
  return (
    <InputArea>
      <Input
        placeholder={text}
        placeholderTextColor="#707070"
      />
      <TouchableOpacity>
        {icon}
      </TouchableOpacity>
    </InputArea>
  );
}