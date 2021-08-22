import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 65px;
  background-color: #EFEFEF;
  flex-direction: row;
  border-radius: 15px;
  padding-left: 25px;
  align-items: center;
  margin-bottom: 18px;
`;

const Input = styled.TextInput`
  font-size: 15px;
  color: #707070;
  margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password} : any) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#707070"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
}