import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import { Divisor } from '../../screens/UserProfile/styles';

import styled from 'styled-components/native';
import  MaskedInput  from 'react-native-masked-input'
import Collapsible  from 'react-native-collapsible';

import RadioButtonRN from '../_dependency/radio-buttons-react-native/RadioButtonRN';
import WithoutPicture from "../../assets/UserList/withoutPhoto.png";

import { 
  Label, 
  PhoneArea, 
  PickerArea, 
  RadioArea, 
  TextInput 
} from '../../assets/Styles/PageCRUDTemplate/styles';

const Container = styled.TouchableHighlight`
  height: 60px;
  margin: 0 20px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: #f8f7f7;

  border-radius: 10px;
  border: 1px solid #ECECEC;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
`;

const Image = styled.View`
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
  height: 100%;
  justify-content: center;
  width: 190px;
`;

const Name =  styled.Text`
  color: #000000;
  font-size: 16px;
`;

const MenuIcon = styled.View`
  height: 100%;
  width: 8%;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.View`
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
  /* background-color: #f3f3f3; */
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 38%;
`;

export const Accept = styled.TouchableOpacity`
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
  declineOnPress?: Function,
  acceptOnPress?: Function,
}

const data = [
  {
    value: true,
    label: "Sim",
  },
  {
    value: false,
    label: "Não",
  },
];

const UserRequestCard: React.FC<IUserRequestCardProps> = ({ 
  name, isPCD, email, phoneNumber, declineOnPress, acceptOnPress
}: any ) => {
  
  let pcdTagRender = <React.Fragment/>
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  const toggleExpanded = () => setCollapsed(!collapsed);

  if(isPCD){ pcdTagRender = <Pcd>PCD</Pcd> }

  return (
    <Formik
      initialValues={{ 
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isPCD: isPCD,
        
        department: 0,
        password: "",
        isADM: false,
        // picture: image,
      }}
      onSubmit={(values: any) => {
        console.log(values)
        // axios()
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue}) => (
        <React.Fragment>
          <Container underlayColor="#ebebeb" onPress={toggleExpanded}>
            <>
              <Image>
                <PersonPicture source={WithoutPicture}/>
              </Image>

              <Details>
                <Name numberOfLines={1}>{values.name}</Name>
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
            style={{
              height: 375
            }}
            duration={600}
          >
            <CollapsibleContainer>
              <Content>
                {isAccepted ? (
                <Divisor 
                  style={{
                    paddingTop: 0,
                    borderBottomWidth: 0
                  }}
                >

                <Label>Tornar administrador?</Label>
                  <RadioArea style={{marginBottom: -10}}>
                    <RadioButtonRN
                      data={data}
                      animationTypes={['shake']}
                      selectedBtn={(e: any) => {
                        setFieldValue("isADM", e.value)
                        handleChange("isADM");
                      }}
                      boxDeactiveBgColor="#F5F5F5"
                      circleSize={10}
                      initial={2}
                    />
                  </RadioArea>

                  <Label style={{paddingTop: 15}}>Senha</Label>
                  <TextInput
                    value={"**************"}
                    editable={false}
                  />

                  <Label style={{paddingTop: 15}}>Departamento</Label>
                  <PickerArea>
                    <Picker
                      mode="dialog"
                      selectedValue={values.department}
                      onValueChange={(itemValue, itemIndex) => {
                        setFieldValue("department", itemIndex)
                        handleChange("department");
                      }}
                      style={{
                        borderWidth: 1,
                        color: "#565656"
                      }}
                      itemStyle={{
                        marginLeft: 80,
                      }}
                    >
                      <Picker.Item label="Sem Departamento" value={0} key={0}/>
                      <Picker.Item label="Secretaria" value={1} key={1}/>
                      <Picker.Item label="Diretoria" value={2} key={2}/>
                      <Picker.Item label="Administração" value={3} key={3}/>
                      <Picker.Item label="RH" value={4} key={4}/>
                    </Picker>
                  </PickerArea>

                </Divisor>
                ) : (
                  <Divisor style={{
                    paddingTop: 0, 
                    borderBottomWidth: 0
                  }}>
                    <Label>E-mail</Label>
                    <TextInput
                      value={values.email}
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
                        value={values.phoneNumber}
                      />
                    </PhoneArea>

                    <Label style={{paddingTop: 15}}>Deficiente Visual?</Label>
                    <TextInput
                      value={isPCD ? "Sim" : "Não"}
                      editable={false}
                    />
                  </Divisor>
                )}
              </Content>

              <Buttons>
                <Decline 
                  onPress={() => isAccepted ? setIsAccepted(!isAccepted) : declineOnPress()}
                  style={{
                    backgroundColor:"#f3f3f3",
                    // backgroundColor: isAccepted ? "#f3f3f3": "#FFE4E4",
                  }}
                >
                  <ButtonText 
                    style={{
                      color: "#555555",
                      // color: isAccepted ? "#555555" : "#F66363",
                    }}
                  >
                    {isAccepted ? 'Voltar' : 'Recusar'}
                  </ButtonText>
                </Decline>

                <Accept 
                  style={{
                    // backgroundColor: isAccepted ? "#8363F6": "#83fa8f",
                    backgroundColor: isAccepted ? "#8363F6": "#E8E2FD",
                  }}
                  onPress={() => {
                    if(isAccepted) {
                      handleSubmit()
                      acceptOnPress()
                    } else {
                      setIsAccepted(true);
                    }
                  }}
                >
                  <ButtonText 
                  style={{
                    // color: isAccepted ? "#fff" : "#1e7712",
                    color: isAccepted ? "#fff" : "#8363F6",
                  }}>{isAccepted ? 'Salvar' : 'Avançar'}</ButtonText>
                </Accept>
              </Buttons>

            </CollapsibleContainer>
          </Collapsible>
        </React.Fragment>
      )}
    </Formik>
  );
}

export default UserRequestCard;