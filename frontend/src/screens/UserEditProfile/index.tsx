import React, { useEffect, useState } from "react";
import { Alert, Button, Platform, Text, View } from "react-native";
import { BackgroundNavigation, BackgroundProfile, Divisor, ProfileDetails } from "../UserProfile/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import { Picker } from "@react-native-community/picker";
import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import * as ImagePicker from 'expo-image-picker';

import ProfileActionButton from "../../components/ProfileActionButton";
import Navigation from "../../components/Navigation";
import Details from "../../components/Details";

import Background from "../../assets/UserList/background.png";

import { 
  Container,
  EditButton,
  Label,
  TextInput,
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
      
      <ProfileDetails showsVerticalScrollIndicator={false}>
        <BackgroundProfile source={Background} resizeMode="cover"/>
        
        <Formik
            initialValues={{ 
              picture: image,
              name: "Isaque José de Souza",
              email: "isaque@gmail.com",
              phoneNumber: "11 9654185896",
              department: 1,
              isPCD: true,
              password: "FalaFi",
            }}
            onSubmit={(values: any) => {
              // console.log(values)
              // axios()
            }}
          >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
            <View>
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
                <Label>Nome Completo</Label>
                <TextInput
                  value={values.name}
                  onChangeText={ handleChange("name") }
                  onBlur={ handleBlur("name") }
                  placeholder="Preencha com o nome completo"
                />

                <Label>E-mail</Label>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="exemplo@exemplo.com"
                />

                <Label>Celular</Label>
                <TextInput
                  value={"+55 " + values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  placeholder="+55 11 912345678"
                />

                <Label>Cargo</Label>
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
                    <Picker.Item label="Administração" value={0} key={0}/>
                    <Picker.Item label="Secretaria" value={1} key={1}/>
                    <Picker.Item label="Diretoria" value={2} key={2}/>
                    <Picker.Item label="TI" value={3} key={3}/>
                    <Picker.Item label="RH" value={4} key={4}/>
                  </Picker>
                </PickerArea>
                
                <Label>Deficiente Visual?</Label>
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

                <Label>Senha</Label>
                <ButtonPassword
                  // onPress={isPasswordChange}
                >
                  <Placeholder>Clique para alterar</Placeholder>
                  <AntDesign name="caretright" size={10} color="#707070" />
                </ButtonPassword>

              </Divisor>

              <Divisor>
                <SubmitButton
                  onPress={() => {
                    console.log(values); 
                    handleSubmit;
                    // alert("Dados alterados com sucesso");
                    // navigation.navigate("UserProfile");
                  }}   
                >
                  <Text style={{color: "#fff", fontSize: 18}}>Atualizar</Text>
                </SubmitButton>

              </Divisor>

            </View>
          )}
        </Formik>
      </ProfileDetails>
    </Container>
  )
}

export default UserEditProfile;
