import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Card = styled.TouchableOpacity`
  height: 150px;
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
  
  const { width } = Dimensions.get("window");
  let badgeComponent = <Badge>Pessoal</Badge>;

  return(
    <Card onPress={ onPress } style={[backgroundColor,{
      width: width/2.36,
    }]}>
      <Content>
        { badge ? badgeComponent : null }
        <Title>{text}</Title>
      </Content>
    </Card>
  )
}