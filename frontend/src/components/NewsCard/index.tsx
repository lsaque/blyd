import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

const Container = styled.View`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 10px; */
  /* border: 1px solid red; */
  border-radius: 20px;
  margin-top: 20px;
`;

const Wrapper = styled.View`
  /* width: 100%; */
  /* display: flex; */
  flex-direction: row;
  background: #FCEEEC;
  border-radius: 20px;
  padding: 20px 45px;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
`;

const Information = styled.View`
  /* border: 1px solid red; */
  max-width: 180px;
`;

const InformationText = styled.Text`
  /* border: 1px solid green; */
  width: 190px;
  font-size: 20px;
  /* word-wrap: break-word; */
`;

const Button = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
  background-color: #FB7768;
  /* width: 150px; */
  height: 40px;
  border-radius: 10px;
  align-items: center;
  padding: 0 25px;
  max-width: 150px;
`;

const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
`;

const ImageInformation = styled.Image`
  width: 100px;
  height: 100px;
`;

export default ({image, text, onPress}:any) => {
  return (
    <Container>
      <Wrapper>

        <Information>
          <InformationText>{text}</InformationText>
          <Button onPress={onPress}>
            <TextButton>Encontre</TextButton>
            <Feather name="arrow-right" size={20} color="#FFF" />
          </Button>
        </Information>

        <ImageInformation source={image} resizeMode="contain"/>

      </Wrapper>
    </Container>
  );
}