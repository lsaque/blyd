import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from "@react-native-community/picker";

import * as Yup from 'yup';
import  MaskedInput  from 'react-native-masked-input'

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
} from "../../assets/Styles/PageCRUDTemplate/styles";
import Details from '../../components/Details';
import Navigation from '../../components/Navigation';
import ProfileActionButton from '../../components/ProfileActionButton';
import RadioButtonRN from '../../components/_dependency/radio-buttons-react-native/RadioButtonRN';
import { BackgroundNavigation, BackgroundProfile, Divisor, ProfileDetails } from '../UserProfile/styles';

interface ISignInProps{}

import Background from '../../assets/Admin/background.png';
import WithoutPicture from "../../assets/UserList/withoutPhoto.png";

const UserEditProfileSchema = Yup.object().shape({
  picture: Yup.string(),

  name: Yup.string()
  .min(3, 'Nome muito pequeno!')
  .max(50, 'Muito longo!')
  .required(''),

  email: Yup.string()
  .email('Insira um e-mail válido')
  .required(''),

  phoneNumber: Yup.string()
  .min(2, "Necessário DDD")
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
  .required(''),

})

const SignIn: React.FC<ISignInProps> = ({ navigation }: any) => {
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
  
  return (
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack("history")}
          title="Enviar"
          titleStrong="Solicitação"
        />
      </BackgroundNavigation>
    
        <Formik
          initialValues={{ 
            name: "",
            email: "",
            phoneNumber: "",
            isPCD: false,
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={UserEditProfileSchema}
          onSubmit={(values: any) => {
            // console.log(values)
            // axios()
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, dirty, isValid }) => (
            <React.Fragment>
              <ProfileDetails 
                showsVerticalScrollIndicator={false} 
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
              >
                {/* <BackgroundProfile source={Background} resizeMode="cover"/> */}
                <View style={{height: 80}}/>
                <Details 
                  avatar={WithoutPicture}
                  isPCD={values.isPCD}
                  hideNameAndEmail={true}
                />

                <Divisor>
                  {/* <EditButton>
                    <ProfileActionButton
                      icon={<MaterialIcons name="edit" size={18} color="black" />}
                      placeholder="Mudar foto de perfil"
                      onPress={ () => {}}                
                    />
                  </EditButton> */}
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
                    placeholder="Preencha com o nome completo"
                    returnKeyType="next"
                    // onSubmitEditing={() => emailRef.current.focus()}
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
                    // ref={emailRef}
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
                      // ref={celularRef}
                    />
                  </PhoneArea>
                  <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                  
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

              <SubmitButton
                onPress={() => {
                  handleSubmit;
                  console.log(values); 
                  alert("Solicitação enviada com sucesso! \nAguarde a liberação.");
                  navigation.goBack()
                }}
                style={{
                  marginHorizontal: 20,
                  opacity: !(dirty && isValid) ? 0.6 : 1,
                }}   
                disabled={!(dirty && isValid)}
              >
                <Text style={{color: "#fff", fontSize: 18}}>Enviar</Text>
              </SubmitButton>
            </React.Fragment>
          )}
        </Formik>
    </Container>
  )
}

export default SignIn;