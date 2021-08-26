import React, { useState } from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 65px;
  background-color: #EFEFEF;
  flex-direction: row;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 18px;
  border-color:#8749FC;
`;

const Input = styled.TextInput`
  font-size: 15px;
  color: #707070;
  width: 100%;
  height: 100%;
  padding-left: 25px;
`;


export default ({placeholder, value, onChangeText, password} : any) => {

  const [isFocus, setFocus] = useState(false);

  return (
    <InputArea
      style={{
        borderWidth: isFocus ? 1.5 : 0,
      }}
    >
      <Input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        placeholderTextColor="#707070"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
}