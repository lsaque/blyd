import React from "react";
import styled from "styled-components/native";

import { SimpleLineIcons } from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #707070;
  padding: 0 20px;
  margin-bottom:24px;
`; 

const SeeAll = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin-right: 10px;
`;

const SeeAllText = styled.Text`
  color: #707070;
  font-size: 18px;
  padding-right: 10px;
  font-style: italic;
`;

interface IAdminTitleProps{
  text: string,
  seeAll?: boolean,
  onPress?: any,
}

const AdminTitle: React.FC<IAdminTitleProps> = ({text, seeAll, onPress}) => {

  let seeAllRender = <React.Fragment/>;

  if(seeAll){
    seeAllRender = (
      <SeeAll>
        <SeeAllText>Ver todos</SeeAllText>
        <SimpleLineIcons name="arrow-right" size={18} color="#707070"/>
      </SeeAll>
    )
  }

  return (
    <Container>
      <Title>{text}</Title>
      <SeeAll onPress={onPress}>{seeAllRender}</SeeAll>
    </Container>
  )
}
export default AdminTitle;
