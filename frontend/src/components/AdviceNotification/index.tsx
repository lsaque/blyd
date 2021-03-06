import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';

const Card = styled.TouchableOpacity`
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin: 10px 0;
`;

const Left = styled.View`
  width: 60px;
  height: 60px;
  border-radius:10px;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

const Center = styled.View`
  justify-content: center;
  /* border: 1px solid red; */
  width: 200px;
`;

const Title = styled.Text`
  font-size: 18px;
`;

const Advice = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const Right = styled.View``;

const SuggestedTime = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const SuggestedTimeText = styled.Text`
  margin-left: 10px;
  font-size: 18px;
`;

export default ({importance, text, onPress}: any) => {
  
  let strongColor, lightColor, borderWidth = 1.5;

  switch (importance) {
    case 1:
      strongColor = '#FF8B8B'
      lightColor='#FFF2F2'
    break;
    
    case 2:
      strongColor = '#8BCAFF'
      lightColor='#F2FDFF'
    break;
    
    default:
      strongColor = '#9A9A9A'
      lightColor='#EFEFEF'
      borderWidth = 0
    break;
  }

  return (
    <Card 
      onPress={onPress}
      style={{
        borderWidth: borderWidth,
        borderColor: strongColor,
        backgroundColor: lightColor
      }}
    >
      <Left style={{
        backgroundColor: strongColor,
      }}>
        <FontAwesome5 name="exclamation" size={28} color={lightColor} />
      </Left>

      <Center>
        <Title style={{
          color: strongColor,
        }}>
          Intransitável
        </Title>
        <Advice numberOfLines={1}>{text}</Advice>
      </Center>

      <Right>
        <SimpleLineIcons name="arrow-right" size={25} color={strongColor} />
      </Right>
    </Card>
  );
}
