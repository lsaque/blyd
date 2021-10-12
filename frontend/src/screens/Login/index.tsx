// import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Formik } from 'formik';
import { Image, Platform, Text, View, Dimensions } from 'react-native';

import * as Yup from 'yup';

import { 
  Container,
} from './styles';

import { 
  BackgroundImage,
  BoxContent,
  Content,
  Description,
  RegisterButton,
  SignWrapper,
  Title,
} from '../../../styles';

import { 
  ErrorMessage,
  Label,
  SubmitButton,
  TextInput,
} from '../../assets/Styles/PageCRUDTemplate/styles';

import Background from '../../assets/Login/background.png';
import Navigation from '../../components/Navigation';

// import { AdminScreen, UserScreen } from '../..';

interface ILoginProps{}

const UserEditProfileSchema = Yup.object().shape({
  email: Yup.string()
  .email('Insira um e-mail válido')
  .required(''),

  password: Yup.string()
  .min(6, "É preciso ter pelo menos 6 caracteres")
  .required(''),

  isADM: Yup.boolean()
  .required(''),
})

const Login: React.FC<ILoginProps> = ({ navigation }: any) => {

  const password = useRef<any>(null);
  const enterButton = useRef<any>(null);
  // let enterScreenRender = <UserScreen/>


  const validation = (values: any, dirty: any, isValid: any, handlesubmit: any) => {
    if((values.email && values.password != null) && dirty && isValid){
      handlesubmit;
      console.log(values)
      if (values.isADM) {
        navigation.navigate('AdminScreen')
      } else 
        navigation.navigate('UserScreen')
    } else alert("É necessário um e-mail e senha válidos para continuar")
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>

      <BackgroundImage source={Background} resizeMode="cover" style={{
        padding: 20,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        // height: 100,
      }}>

      <Formik
        initialValues={{ 
          email: "",
          password: "",
          isADM: false
        }}
        validationSchema={UserEditProfileSchema}
        onSubmit={(values: any) => {
          // console.log(values)
          // axios()
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, dirty, isValid }) => (
          <SignWrapper>

            <BoxContent style={{marginTop: 20}}>
              <Title>Entrar no Blyd</Title>
              <Description>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </Description>
            </BoxContent>

            <Content>
              <Label>E-mail de usuário</Label>
              <TextInput
                value={values.email}
                autoFocus={true}
                onChangeText={ handleChange("email") }
                onBlur={ handleBlur("email") }
                placeholder="E-mail de entrada"
                returnKeyType="next"
                onSubmitEditing={() => password.current.focus()}
              />
              <ErrorMessage>{errors.email}</ErrorMessage>

              <Label>Senha</Label>
              <TextInput
                value={values.password}
                onChangeText={ handleChange("password") }
                onBlur={ handleBlur("password") }
                secureTextEntry={true}
                placeholder=""
                returnKeyType="done"
                ref={password}
                onSubmitEditing={() => {
                  handleSubmit;
                  console.log(values)
                  validation(values, dirty, isValid, handleSubmit)
                  // setShowHome(true);
                }}
              />
              <ErrorMessage>{errors.password}</ErrorMessage>

              <SubmitButton
                onPress={() => {
                  handleSubmit;
                  console.log(values);
                  validation(values, dirty, isValid, handleSubmit)
                }}
                style={{
                  margin: 0,
                }}   
                ref={enterButton}
              >
                <Text style={{color: "#fff", fontSize: 18}}>Entrar</Text>
              </SubmitButton>

              <RegisterButton
                text="Solicitar Registro"
                onPress={() => navigation.navigate('UserScreen', {screen: "SignIn"})}
              />

            </Content>
          </SignWrapper>
        )}
      </Formik>
      </BackgroundImage>
    </Container>
  );
}


export default Login;