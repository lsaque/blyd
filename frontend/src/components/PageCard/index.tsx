import React, { useRef } from 'react';
import { Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import styled from 'styled-components/native';

const Card = styled.TouchableOpacity`
  /* background-color: #D6FFE1; */
  height: 150px;
  width: 165px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
`;

const Content = styled.View`
  align-items: center;
`;

const Badge = styled.Text`
  background-color: #00000030;
  color: white;
  width: 80px;
  height: 25px;
  text-align: center;
  border-radius: 20px;
  font-size: 15px;
  margin-bottom: 5px;
`;

const Title = styled.Text`
  font-size: 18px;
  width: 120px;
  text-align: center;
`;

export default ({badge, text, onPress, backgroundColor}: any) => {

  let badgeComponent = (<Badge>Pessoal</Badge>);

  return(
    <Card onPress={onPress} style={backgroundColor}>
      <Content>
        {badge ? badgeComponent : null}
        <Title>{text}</Title>
      </Content>
    </Card>
  )
}