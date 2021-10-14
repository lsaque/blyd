import React from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';


const InputArea = styled.KeyboardAvoidingView`
  flex-direction: row;
  background-color: #FFF;
  /* border: 1px solid red; */
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 40px;
`;

const ButtonSearch = styled.TouchableOpacity`
  /* border: 1px solid red; */
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 15%;
`;

const Input = styled.TextInput`
  /* height: 100%; */
  /* border: 1px solid red; */
  width: 70%; 
  font-size: 16px;
`;

export default ({onPress, text} : any) => {
  return(
    <InputArea 
      style={{elevation: 20}}
      accessibilityHint="Escreva neste campo o nome ou departamento de quem você gostaria ligar"
    >
      <ButtonSearch 
        onPress={onPress}
        accessibilityHint="Clique para cancelar a busca"
      >
        <SimpleLineIcons name="arrow-left" size={20} color="black" />
      </ButtonSearch>

      <Input placeholder={text}/>

      <ButtonSearch
        accessibilityHint="Clique para pesquisar o contato através do comando de voz"
      >
        <MaterialIcons name="keyboard-voice" size={25} color="black" />
      </ButtonSearch>
    </InputArea>
  );
}