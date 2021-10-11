import React from "react";
import { Text } from "react-native";
import { BackgroundNavigation, BackgroundProfile, Divisor, ProfileDetails } from "../../../UserProfile/styles";
import { Formik } from "formik";

import * as Yup from 'yup';

import RadioButtonRN from "../../../../components/_dependency/radio-buttons-react-native/RadioButtonRN";
import Navigation from "../../../../components/Navigation";
import Details from "../../../../components/Details";

import Background from "../../../../assets/UserList/background.png";

import { 
  Container,
  Label,
  TextArea,
  TextAreaInput,
  RadioArea,
  SubmitButton,
  ErrorMessage
} from "../../../../assets/Styles/PageCRUDTemplate/styles";

interface IAdviceEditProfileProps{}

const UserEditProfileSchema = Yup.object().shape({
  picture: Yup.string(),

  adviceDescription: Yup.string()
  .min(5, 'Aviso muito pequeno!')
  .required('Obrigatório ter uma descrição de aviso'),

  adviceTimeRemaining: Yup.number()
  .required(''),

  isImpassable: Yup.boolean()
  .required(''),
})


const AdviceEditProfile: React.FC<IAdviceEditProfileProps> = ({ navigation }: any) => {
  
  let linkImage = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

  const dataIsImpassable = [
    {
      value: true,
      label: "Transitável",
    },
    {
      value: false,
      label: "Intransitável",
    },
  ];

  const dataTimeRemaining = [
    {
      value: 1,
      label: "Até 1 hora",
    },
    {
      value: 2,
      label: "Até 3 horas",
    },
    {
      value: 3,
      label: "Até 1 dia",
    },
    {
      value: 4,
      label: "Até 3 dias",
    },
  ];
  
  return (
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack("history")}
          title="Editar"
          titleStrong="Aviso"
        />
      </BackgroundNavigation>
    
        <Formik
          initialValues={{ 
            userPicture: linkImage,
            userName: "Isaque José de Souza",
            userEmail: "isaque@gmail.com",
            
            adviceDescription: "Limpeza - corredor 2B",
            adviceTimeRemaining: 3,
            isImpassable: true,
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
                <BackgroundProfile source={Background} resizeMode="cover"/>
                <Details 
                  avatar={{uri: values.userPicture}}
                  isPCD={false}
                  markedAdvice={true}
                  name={values.userName}
                  email={values.userEmail}
                />
                
                <Divisor/>


                <Divisor>

                  <Label>Motivo do aviso</Label>
                  <TextArea>
                    <TextAreaInput
                      keyboardType={"ascii-capable"}
                      value={values.adviceDescription}
                      autoFocus={true}
                      onChangeText={ handleChange("adviceDescription") }
                      onBlur={ handleBlur("adviceDescription") }
                      placeholder="Preencha com a descrição do aviso"
                      returnKeyType="next"
                      multiline={true}
                      // numberOfLines={15}
                    />
                  </TextArea>
                  <ErrorMessage>{errors.adviceDescription}</ErrorMessage>

                  <Label>Duração de alerta</Label>
                  <RadioArea>
                    <RadioButtonRN
                      data={dataTimeRemaining}
                      animationTypes={['shake']}
                      selectedBtn={(e: any) => {
                        setFieldValue("adviceTimeRemaining", e.value)
                        handleChange("adviceTimeRemaining");
                      }}
                      boxDeactiveBgColor="#F5F5F5"
                      circleSize={10}
                      initial={values.adviceTimeRemaining}
                    />
                  </RadioArea>

                  <Label>Situação de passagem</Label>
                  <RadioArea>
                    <RadioButtonRN
                      data={dataIsImpassable}
                      animationTypes={['shake']}
                      selectedBtn={(e: any) => {
                        setFieldValue("isImpassable", e.value)
                        handleChange("isImpassable");
                      }}
                      boxDeactiveBgColor="#F5F5F5"
                      circleSize={10}
                      initial={values.isImpassable ? 1 : 2}
                    />
                  </RadioArea>

                </Divisor>
              </ProfileDetails>

              <SubmitButton
                onPress={() => {
                  handleSubmit;
                  console.log(values); 
                  alert("Dados alterados com sucesso");
                  // navigation.goBack()
                }}
                style={{
                  marginHorizontal: 20,
                  opacity: !(dirty && isValid) ? 0.6 : 1,
                }}   
                disabled={!(dirty && isValid)}
              >
                <Text style={{color: "#fff", fontSize: 18}}>Atualizar</Text>
              </SubmitButton>
            </React.Fragment>
          )}
        </Formik>
    </Container>
  )
}

export default AdviceEditProfile;
