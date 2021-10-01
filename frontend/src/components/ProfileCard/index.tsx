import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';

const Container = styled.TouchableOpacity`
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px 25px;
  background-color: #f4f9fa;
  width: 100%;
  border-color: #8fabaf5a;
  border-width: 1px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.View`
  width: 60px;
  height: 60px;
  background-color: #e1f0f2;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const PersonPicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Center = styled.View`
  max-width: 169.2px;
  width: 60%;
  justify-content: center;
`;

const PersonName =  styled.Text`
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  /* font-weight: bold; */
`;

const Department =  styled.Text`
  color: #4A4A4A;
  font-size: 18px;
  /* font-weight: bold; */
`;

const Right = styled.View`
  justify-content: center;
  align-items: center;
`;

export default ({name, departmant, number, picture}: any) => {
  
  let personPicture = <Ionicons name="person" size={40} color="#B9D5E1"/>;

  if(picture != null){
    personPicture = <PersonPicture source={picture}/>;
  }

  return (
    <Container onPress={() => { Linking.openURL("tel:" + number) }}>
      <Wrapper>

        <Left>
          {personPicture}
        </Left>

        <Center>
          <PersonName numberOfLines={1}>{name}</PersonName>
          <Department numberOfLines={1}>{departmant}</Department>
        </Center>

        <Right>
          <SimpleLineIcons name="arrow-right" size={28} color="#9A9A9A" />
        </Right>

      </Wrapper>
    </Container>
  );
}