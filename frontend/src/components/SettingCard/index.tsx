import React from "react";
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.TouchableHighlight`
  /* height: 60px; */
  max-height: 85px;
  margin: 0 20px;
  padding: 0 10px;
  margin-bottom:15px;
  /* background-color: #f8f7f758; */
  background-color: #fff;

  border-radius: 10px;
  border: 1px solid #ECECEC;


  flex-direction: row;
  justify-content: space-between;
  /* justify-content: space-evenly; */
  align-items: center;
  opacity: 1;
`;

const Image = styled.View`
  /* width: 13%; */
  height:45px;
  width: 45px;
  border-radius: 40px;
  background-color: #F1EEFF;
  justify-content: center;
  align-items: center;
`;

const Details = styled.View`
  /* border: 1px solid red; */
  /* width: 50%; */
  width: 220px;
  height: 100%;
  justify-content: center;
  /* width: 140px; */
`;

const Title =  styled.Text`
  color: #000000;
  font-size: 16px;
`;

const Description =  styled.Text`
  color: #a1a1a1;
  font-size: 14px;
`;

const MenuIcon = styled.View`
  /* border: 1px solid red; */
  height: 100%;
  /* width: 8%; */
  align-items: center;
  justify-content: center;
`;


interface ISettingCardProps{
  title: String, 
  description: String,
  onPress: Function,
  icon: any,
}


const SettingCard: React.FC<ISettingCardProps> = ({
  icon, title, description, onPress
}: any) => {

  // icon={<Ionicons name="person" size={24} color="black" />}
  // title="Perfil Pessoal"
  // description="Lorem"
  // onPress={()=>{}}

  return (
    <Container 
      underlayColor="#ebebeb" 
      onPress={onPress}
      accessibilityHint={ title + ", clique para " + description}
    >
      <React.Fragment>
        <Image>
          {icon}
        </Image>

        <Details>
          <Title numberOfLines={1}>{title}</Title>
          {/* <Description numberOfLines={1}>{description}</Description> */}
          <Description>{description}</Description>
        </Details>

        <MenuIcon>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#969696" />
        </MenuIcon>
      </React.Fragment>
    </Container>
  )
}
export default SettingCard;
