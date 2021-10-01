import React from "react";
import styled from "styled-components/native";

import { Ionicons } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  height: 60px;
  /* width: 100%; */
  margin:0 20px;
  /* border: 1px solid red; */
  align-items: flex-end;
  justify-content: center;
  padding-right: 5px;
`;

const Button = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #da5059;
  justify-content: center;
  align-items: center;
`;


interface ITrashDeleteProps{
  onPress?: Function;
}

const TrashDelete: React.FC<ITrashDeleteProps> = ({onPress}:any) => {

  return (
    <Container onPress={onPress}>
      <Button>
        <Ionicons name="ios-trash-outline" size={30} color="white" />
      </Button>
    </Container>
    
  )
}
export default TrashDelete;
