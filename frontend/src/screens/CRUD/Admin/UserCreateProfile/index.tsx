import React, { createRef, useEffect, useRef, useState, useContext } from "react";
import { Platform, Text, Image, View } from "react-native";
import { BackgroundNavigation, BackgroundProfile, Divisor, ProfileDetails } from "../../../UserProfile/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import { Picker } from "@react-native-community/picker";

import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import  MaskedInput  from 'react-native-masked-input'

import RadioButtonRN from "../../../../components/_dependency/radio-buttons-react-native/RadioButtonRN";
import ProfileActionButton from "../../../../components/ProfileActionButton";
import Navigation from "../../../../components/Navigation";
import Details from "../../../../components/Details";

import Background from "../../../../assets/Admin/background.png";
// import Background from "../../../../assets/UserList/background.png";
import WithoutPicture from "../../../../assets/UserList/withoutPhoto.png";

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
  SubmitButton,
  ErrorMessage
} from "../../../../assets/Styles/PageCRUDTemplate/styles";
import { showAlert } from "../../../../utils/commons/showAlert";
import ApiContext from "../../../../contexts/ApiContext";
import axios from "axios";
import { BASE_URL } from "../../../../utils/requests";
import { status } from "../../../../types/status";

interface IUserCreateProfileProps{}

const UserCreateProfileSchema = Yup.object().shape({
  picture: Yup.string(),

  name: Yup.string()
  .min(3, 'Nome muito pequeno!')
  .max(40, 'Muito longo!')
  .required(''),

  email: Yup.string()
  .email('Insira um e-mail válido')
  .required(''),

  phoneNumber: Yup.string()
  .min(2, "Necessário DDD")
  .max(11)
  .required(''),

  department: Yup.number()
  .required(''),

  isPCD: Yup.boolean()
  .required(''),

  password: Yup.string()
  .min(6, "É preciso ter pelo menos 6 caracteres")
  .required(''),

  passwordConfirmation: Yup.string()
  .when("password", {
    is: (val: string | any[]) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Ambas as senhas precisam ser iguais"
    )})
    .required('')
})

const UserCreateProfile: React.FC<IUserCreateProfileProps> = ({ navigation }: any) => {
  
  const avatarWithoutPhoto = Image.resolveAssetSource(WithoutPicture).uri;
  const [image, setImage] = useState<String>(avatarWithoutPhoto);
  const emailRef = useRef<any>(null);
  const celularRef = createRef<any>();

  const { state } = useContext(ApiContext);

  useEffect(() => {(
    async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          showAlert(false, 'Desculpe, precisamos da permissão do gerenciamento de arquivos para funcionar!');
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
          title="Criar"
          titleStrong="Usuário"
        />
      </BackgroundNavigation>
    
        <Formik
          initialValues={{ 
            picture: "",
            name: "",
            email: "",
            phoneNumber: "",
            department: 0,
            isPCD: null,
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={UserCreateProfileSchema}
          onSubmit={(values: any) => {

            // axios.get(`${BASE_URL}/usuarios/criar/${values.name}/${values.email}/${values.password}/${values.phoneNumber}/sem foto/${values.isPCD}/${values.isADM}/${values.department}`)
            // .then(response => {
            //   const data = response.data as status;
            //   showAlert(data.status, data.mensagem);
            //   if(data.status) navigation.goBack();
            // })
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched, isSubmitting, dirty, isValid}) => (
            <React.Fragment>
              <ProfileDetails 
                showsVerticalScrollIndicator={false} 
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
              >
                <BackgroundProfile source={Background} resizeMode="cover"/>
                <Details 
                  avatar={image && {uri: image}}
                  isPCD={values.isPCD}
                  hideNameAndEmail={true}
                />

                <Divisor>
                  <EditButton>
                    <ProfileActionButton
                      icon={<MaterialIcons name="edit" size={18} color="black" />}
                      placeholder="Incluir foto de perfil"
                      onPress={() => pickImage(handleChange("picture"))}                
                    />
                  </EditButton>
                </Divisor>

                <Divisor>
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

                  <Label>Nome completo</Label>
                  <TextInput
                    keyboardType={"ascii-capable"}
                    value={values.name}
                    autoFocus={true}
                    onChangeText={ handleChange("name") }
                    onBlur={ handleBlur("name") }
                    placeholder="Exemplo Silva de Souza"
                    returnKeyType="next"
                    onSubmitEditing={() => emailRef.current.focus()}
                  />
                  <ErrorMessage>{errors.name}</ErrorMessage>

                  <Label>E-mail</Label>
                  <TextInput
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="exemplo@exemplo.com"
                    returnKeyType="next"
                    style={{
                      textTransform: "lowercase",
                    }}
                    // onSubmitEditing={() => celularRef.current.focus()}
                    ref={emailRef}
                  />
                  <ErrorMessage>{errors.email}</ErrorMessage>


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
                  <ErrorMessage>{errors.phoneNumber}</ErrorMessage>

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
                      {
                        state.setores.map(setor => <Picker.Item label={setor.nome} value={setor.id} key={setor.id}/>)
                      }
                    </Picker>
                  </PickerArea>
                  <ErrorMessage>{errors.department}</ErrorMessage>
                </Divisor>

                <Divisor>
                  <Label>Senha</Label>
                  <TextInput
                    secureTextEntry={true}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    placeholder=""
                    returnKeyType="next"
                  />
                  <ErrorMessage>{errors.password}</ErrorMessage>

                  <Label>Confirmar senha</Label>
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={handleChange("passwordConfirmation")}
                    onBlur={handleBlur("passwordConfirmation")}
                    placeholder=""
                    returnKeyType="next"
                  />
                  <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
                </Divisor>
              </ProfileDetails>

              <View style={{
                marginHorizontal: 20,
              }}>
                <SubmitButton
                  onPress={() => {
                    handleSubmit;
                    console.log(values);
                  }}
                  style={{
                    marginHorizontal: 20,
                    // backgroundColor: !(dirty && isValid) ? '#ede9f8' : '#8363F6',
                    opacity: !(dirty && isValid) ? 0.6 : 1,
                  }}
                  disabled={!(dirty && isValid)}
                >
                  <Text style={{ color:"#fff", fontSize: 18 }
                  }>Cadastrar</Text>
                </SubmitButton>
              </View>
            </React.Fragment>
          )}
        </Formik>
    </Container>
  )
}
export default UserCreateProfile;
