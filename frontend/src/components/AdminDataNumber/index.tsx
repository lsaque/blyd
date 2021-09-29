import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { BackgroundImage } from '../../../styles';

import Wave from "../../assets/Admin/wave.png";

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  width: 140px;
  border-radius: 16px;
  margin-right: 20px;
`;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.Text`
  color: #ffffffb5;
  font-size: 18px;
`;

const Number = styled.Text`
  font-weight: bold;
  color: #FFF;
  margin-top: -8px;
  font-size: 40px;
`;

interface IAdminDataNumberProps{
  category:string,
  number:number,
  backgroundColor: string,
  onPress?: any,
}

const AdminDataNumber: React.FC<IAdminDataNumberProps> = ({category, number, onPress, backgroundColor}:any) => {  
  return (
    <Container style={{backgroundColor}} onPress={onPress}>
      <BackgroundImage source={Wave} resizeMode="cover">
        <Wrapper>
          <Title>{category}</Title>
          <Number>{number}</Number>

        </Wrapper>
      </BackgroundImage>
    </Container>
  );
}

export default AdminDataNumber;
