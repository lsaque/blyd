import React, { createRef, useEffect, useRef, useState } from "react";
import { Alert, Button, Platform, Text, View } from "react-native";
import { BackgroundNavigation, BackgroundProfile, Divisor, ProfileDetails } from "../UserProfile/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import { Picker } from "@react-native-community/picker";
import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
import * as ImagePicker from 'expo-image-picker';
import  MaskedInput  from 'react-native-masked-input'

import RadioButtonRN from "../../components/_dependency/radio-buttons-react-native/RadioButtonRN";
import ProfileActionButton from "../../components/ProfileActionButton";
import Navigation from "../../components/Navigation";
import Details from "../../components/Details";

import Background from "../../assets/UserList/background.png";

import { 
  Container,
  EditButton,
  Label,
  TextInput,
  PhoneArea,
  PickerArea,
  RadioArea,
  ButtonPassword,
  Placeholder,
  SubmitButton
} from "./styles";

interface IUserEditProfileProps{}

const UserEditProfile: React.FC<IUserEditProfileProps> = ({ navigation }: any) => {
  
  let linkImage = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
  const [image, setImage] = useState<String>(linkImage);
  const emailRef = useRef<any>(null);
  const celularRef = createRef<any>();
  
  useEffect(() => {(
    async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos da permissão do gerenciamento de arquivos para funcionar!');
        }
      }
    })();
  }, []);

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
  
  const pickImage = async (handleChange: any) => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });
    
    // console.log(result);
    
    if (!result.cancelled) {
      // console.log(result.base64)
      setImage(result.uri);
      handleChange(result.uri);
    }
  };

  return (
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack("history")}
          title="Editar"
          titleStrong="Perfil"
        />
      </BackgroundNavigation>
    
        <Formik
            initialValues={{ 
              picture: image,
              name: "Isaque José de Souza",
              email: "isaque@gmail.com",
              phoneNumber: "119654185896",
              department: 0,
              isPCD: true,
              password: "FalaFi",
            }}
            onSubmit={(values: any) => {
              // console.log(values)
              // axios()
            }}
          >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
            <>
            <ProfileDetails 
              showsVerticalScrollIndicator={false} 
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
              <BackgroundProfile source={Background} resizeMode="cover"/>
              <Details 
                avatar={image && {uri: image}}
                isPCD={true}
                hideNameAndEmail={true}
              />

              <Divisor>
                <EditButton>
                  <ProfileActionButton
                    icon={<MaterialIcons name="edit" size={18} color="black" />}
                    placeholder="Mudar foto de perfil"
                    onPress={ () => pickImage(handleChange("picture")) }                
                  />
                </EditButton>
              </Divisor>

              <Divisor>
                <Label>Nome completo</Label>
                <TextInput
                  keyboardType={"ascii-capable"}
                  value={values.name}
                  autoFocus={true}
                  onChangeText={ handleChange("name") }
                  onBlur={ handleBlur("name") }
                  placeholder="Preencha com o nome completo"
                  returnKeyType="next"
                  onSubmitEditing={() => emailRef.current.focus()}
                />

                <Label>E-mail</Label>
                <TextInput
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="exemplo@exemplo.com"
                  returnKeyType="next"
                  // onSubmitEditing={() => celularRef.current.focus()}
                  ref={emailRef}
                />

                <Label>Celular</Label>
                <PhoneArea>
                  <MaskedInput
                    style={{
                      color: "#565656"
                    }}
                    keyboardType="number-pad"
                    placeholder="(00) 90000-0000"
                    type={"cel-phone"} 
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) '
                    }}
                    onChangeText={(maskedText, rawText) => {
                      setFieldValue("phoneNumber", rawText)
                      handleChange("phoneNumber")
                    }}
                    value={values.phoneNumber}
                    onBlur={handleBlur("phoneNumber")}
                    returnKeyType="done"
                    ref={celularRef}
                  />
                </PhoneArea>

                <Label>Departamento</Label>
                <PickerArea>
                  <Picker
                    mode="dialog"
                    // prompt="Selecione uma opção:"
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
                
                <Label>Deficiente visual?</Label>
                <RadioArea>
                  <RadioButtonRN
                    data={data}
                    animationTypes={['shake']}
                    selectedBtn={(e: any) => {
                      setFieldValue("isPCD", e.value)
                      handleChange("isPCD");
                    }}
                    boxDeactiveBgColor="#F5F5F5"
                    circleSize={10}
                    initial={values.isPCD ? 1 : 2}
                  />
                </RadioArea>

                {/* <Label>Nova senha</Label>
                <ButtonPassword
                  onPress={() => navigation.navigate("UserEditPassword", {})}
                  >
                  <Placeholder>Clique para alterar</Placeholder>
                  <AntDesign name="caretright" size={10} color="#707070" />
                </ButtonPassword> */}
              </Divisor>

              <Divisor>
                <Label>Gerar nova senha</Label>
                <TextInput
                  secureTextEntry={false}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder="padrão: DOW12345"
                  returnKeyType="next"
                />

                <Label>Administrador?</Label>
                <RadioArea>
                  <RadioButtonRN
                    data={data}
                    animationTypes={['shake']}
                    selectedBtn={(e: any) => {
                      // setFieldValue("isPCD", e.value)
                      // handleChange("isPCD");
                    }}
                    boxDeactiveBgColor="#F5F5F5"
                    circleSize={10}
                    initial={2}
                  />
                </RadioArea>
              </Divisor>
            </ProfileDetails>

            <Divisor>
              <SubmitButton
                onPress={() => {
                  console.log(values); 
                  handleSubmit;
                  // alert("Dados alterados com sucesso");
                  // navigation.navigate("UserProfile");
                  }}
                  style={{
                    marginHorizontal: 20,
                  }}   
                >
                  <Text style={{color: "#fff", fontSize: 18}}>Atualizar</Text>
                </SubmitButton>
              </Divisor>
            </>
          )}
        </Formik>
    </Container>
  )
}

export default UserEditProfile;
