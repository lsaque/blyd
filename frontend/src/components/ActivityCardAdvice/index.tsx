import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';

const Container = styled.TouchableOpacity`
  /* padding: 20px 25px; */
  width: 100%;
  padding-bottom: 30px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.View`
  width: 60px;
  height: 60px;
  background-color: #F0ECFF;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const PersonPicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Center = styled.View`
  max-width: 210px;
  width: 100%;
  justify-content: center;
`;

const PersonName =  styled.Text`
  color: #949494;
  font-weight: bold;
  font-size: 18px;
  /* font-weight: bold; */
`;

const ComplementText = styled.Text`
  font-weight: 500;
`;

const AdviceLocal =  styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

const Right = styled.View`
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #F0ECFF;
  border: 1px solid #DAD7E7;
`;

const TimeDuration = styled.Text`
  color: #000;
  /* font-weight: bold; */
  font-size: 18px;
`;

export default ({name, adviceName, picture, timeDuration, adviceLocal}: any) => {
  
  let personPicture = <Ionicons name="person" size={40} color="#9792ac"/>;

  if(picture != null){
    personPicture = <PersonPicture source={picture}/>;
  }

  return (
    <Container>
      <Wrapper>

        <Left>
          {personPicture}
        </Left>

        <Center>
          <PersonName numberOfLines={1}>{name} 
            <ComplementText> marcou</ComplementText>
          </PersonName>
          <AdviceLocal numberOfLines={1}>{adviceName}
            <ComplementText> | </ComplementText>
            {adviceLocal}
          </AdviceLocal>
        </Center>

        <Right>
          <TimeDuration>
            {timeDuration}
          </TimeDuration>
        </Right>

      </Wrapper>
    </Container>
  );
}