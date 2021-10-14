import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px 25px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.View`
  width: 60px;
  height: 60px;
  background-color: #ffffff73;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const Center = styled.View`
  width: 180px;
  /* border: 1px solid red; */
  justify-content: center;
`;

const TextCenter=  styled.Text`
  color: #4A4A4A;
  font-size: 18px;
  /* font-weight: bold; */
`;

const Right = styled.View`
  justify-content: center;
  align-items: center;
`;

export default ({iconName, text, onPress, backgroundColor}: any) => {
  return (
    <Container onPress={onPress} style={backgroundColor}>
      <Wrapper>

        <Left>
          <MaterialCommunityIcons name={iconName} size={34} color="black" />
        </Left>

        <Center>
          <TextCenter>{text}</TextCenter>
        </Center>

        <Right>
          <SimpleLineIcons name="arrow-right" size={28} color="black" />
        </Right>

      </Wrapper>
    </Container>
  );
}