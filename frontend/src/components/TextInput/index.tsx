import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  /* padding-bottom: 10px; */
`;

const LabelText = styled.Text`
  font-size: 18px;
  color: #707070;
  margin-bottom: 15px;
`;

const InputArea = styled.View`
  height: 60px;
  background-color: #F1EEEE;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Input = styled.TextInput`
  height: 100%;
  width: 80%;
  padding-left: 20px;
`;

const ButtonArea = styled.TouchableOpacity`
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export default ({text, icon, onPress, onChangeText, onBlur, value} : any) => {
  return (
    <Container>
      <LabelText>{text}</LabelText>
      <InputArea>
        <Input
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholder="Informe o motivo"
          placeholderTextColor="#707070"
        />
        <ButtonArea>
          <Ionicons name="mic" size={22} color="#707070" />
        </ButtonArea>
      </InputArea>
    </Container>
  );
}