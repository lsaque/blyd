import React from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';


const InputArea = styled.KeyboardAvoidingView`
  flex-direction: row;
  background-color: #FFF;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 40px;
`;

const ButtonSearch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 15%;
`;

const Input = styled.TextInput`
  height: 100%;
  width: 70%; 
  font-size: 16px;
`;

export default ({onPress} : any) => {
  return(
    <InputArea style={{elevation: 20}}>
      <ButtonSearch onPress={onPress}>
        <SimpleLineIcons name="arrow-left" size={20} color="black" />
      </ButtonSearch>

      <Input placeholder="Deseja ir para onde?"/>

      <ButtonSearch>
        <MaterialIcons name="keyboard-voice" size={25} color="black" />
      </ButtonSearch>
    </InputArea>
  );
}