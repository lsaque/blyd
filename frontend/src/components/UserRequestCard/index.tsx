import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';
import  MaskedInput  from 'react-native-masked-input'
import Collapsible  from 'react-native-collapsible';

import WithoutPicture from "../../assets/UserList/withoutPhoto.png";

import { 
  Label, 
  PhoneArea, 
  TextInput 
} from '../../assets/Styles/PageCRUDTemplate/styles';

const Container = styled.TouchableHighlight`
  height: 60px;
  margin: 0 20px;
  padding: 0 10px;
  margin-bottom: 10px;
  /* margin-top: 10px; */
  /* background-color: #f8f7f758; */
  background-color: #f8f7f7;

  border-radius: 10px;
  border: 1px solid #ECECEC;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
`;

const Image = styled.View`
  /* border: 1px solid red; */
  width: 13%;
  height:100%;
  justify-content: center;
  align-items: center;
`;

const PersonPicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Details = styled.View`
  /* border: 1px solid red; */
  /* width: 50%; */
  /* border: 1px solid red; */
  height: 100%;
  justify-content: center;
  width: 190px;
`;

const Name =  styled.Text`
  color: #000000;
  font-size: 16px;
`;

const MenuIcon = styled.View`
  /* border: 1px solid red; */
  height: 100%;
  width: 8%;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.View`
  /* border: 1px solid red; */
  /* margin-top: -20px; */
  justify-content: center;
  align-items: center;
  width: 50px;
`;

const Pcd = styled.Text`
  background-color: #E8E2FD;
  border-radius: 35px;
  color: #8363F6;
  font-size: 14px;
  font-weight: bold;
  width: 50px;
  height: 25px;
  line-height: 23px;
  text-align: center;
`;

export const CollapsibleContainer = styled.View`
  margin: 0 20px;
  /* margin-top: 10px; */
  padding: 15px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #ECECEC;
  margin-bottom: 10px;
`;

export const Content = styled.View``;

export const Buttons = styled.View`
  padding-top: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Decline = styled.TouchableOpacity`
  background-color: #f3f3f3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 38%;
`;

export const Accept = styled.TouchableOpacity`
  background-color: #83fa8f;
  width: 59%;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
`;

interface IUserRequestCardProps{
  name: String,
  isPCD: boolean,
  email: String,
  phoneNumber: String,
  declineOnPress: Function,
  acceptOnPress: Function,
}

const UserRequestCard: React.FC<IUserRequestCardProps> = ({ 
  name, isPCD, email, phoneNumber, declineOnPress, acceptOnPress
}: any ) => {
  
  let pcdTagRender = <React.Fragment/>
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => setCollapsed(!collapsed);

  if(isPCD){ pcdTagRender = <Pcd>PCD</Pcd> }

  return (
    <React.Fragment>
      <Container underlayColor="#ebebeb" onPress={toggleExpanded}>
        <>
          <Image>
            <PersonPicture source={WithoutPicture}/>
          </Image>

          <Details>
            <Name numberOfLines={1}>{name}</Name>
          </Details>

          <Tag>
            {pcdTagRender}
          </Tag>

          <MenuIcon>
            <MaterialIcons name={collapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={24} color="#707070" />
          </MenuIcon>
        </>
      </Container>

      <Collapsible 
        collapsed={collapsed}
        align="bottom"
        duration={600}
      >
        <CollapsibleContainer>
          <Content>
            <Label>E-mail</Label>
            <TextInput
              value={email}
              editable={false}
            />

            <Label style={{paddingTop: 15}}>Celular</Label>
            <PhoneArea>
              <MaskedInput
                style={{
                  color: "#565656"
                }}
                editable={false}
                keyboardType="number-pad"
                type={"cel-phone"} 
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}
                value={phoneNumber}
              />
            </PhoneArea>

            <Label style={{paddingTop: 15}}>Deficiente Visual?</Label>
            <TextInput
              value={isPCD ? "Sim" : "Não"}
              editable={false}
            />

          </Content>
          <Buttons>

            <Decline onPress={declineOnPress}>
              <ButtonText style={{color: "#555555"}}>Recusar</ButtonText>
            </Decline>

            <Accept onPress={acceptOnPress}>
              <ButtonText style={{color: "#1e7712"}}>Aceitar</ButtonText>
            </Accept>
            
          </Buttons>

        </CollapsibleContainer>
      </Collapsible>
    </React.Fragment>
  );
}

export default UserRequestCard;