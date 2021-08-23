import React from 'react';
import styled from 'styled-components/native';

const Card = styled.TouchableOpacity`
  /* background-color: #D6FFE1; */
  height: 150px;
  width: 165px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
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

  if(badge){
    return(
      <Card onPress={onPress} style={backgroundColor}>
        <Content>
          <Badge>Pessoal</Badge>
          <Title>{text}</Title>
        </Content>
      </Card>
    )
  } else {
    return (
      <Card onPress={onPress} style={backgroundColor}>
        <Content>
          <Title>{text}</Title>
        </Content>
      </Card>
    )
  }
}