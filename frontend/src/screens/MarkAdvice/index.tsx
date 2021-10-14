import React, { useState } from 'react';
import { Platform, View, Text } from 'react-native';
import Navigation from '../../components/Navigation';

import * as Yup from 'yup';

// import Background from "../../../../assets/UserList/background.png";
import Background from "../../assets/UserList/background.png";

import { 
  // Container,
  // ImagePage,
  // Title,
  // Strong,
  Content,
  // RadioArea,
  RadioComponent,
  LabelText,
  MarkAdviceButton,
  // Wrapper,
  // Row
} from './styles';

import TextInput from '../../components/TextInput';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
import Details from '../../components/Details';
import { Container, Label, TextArea, TextAreaInput, RadioArea, SubmitButton, ErrorMessage } from '../../assets/Styles/PageCRUDTemplate/styles';
import RadioButtonRN from '../../components/_dependency/radio-buttons-react-native/RadioButtonRN';
import { ProfileDetails, BackgroundProfile, Divisor } from '../UserProfile/styles';
import { BackgroundNavigation } from '../AdviceProfile/styles';

function getDate(day: number, hour: number) {
    
  const date = new Date();

  const datePerson = date.getDate() + day;
  const mounthPerson = date.getMonth() + 1;
  const yearPerson = date.getFullYear();
  const hourPerson = (date.getHours() + hour) % 24;
  const minutePerson = date.getMinutes();

  return `${datePerson}/${mounthPerson}/${yearPerson}/${hourPerson}/${minutePerson}`;
}

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


export default function Localization({navigation} : any){
  
  const [isFocus, setFocus] = useState(false);
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

  return(
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack("history")}
          title="Marcar"
          titleStrong="Aviso"
        />
      </BackgroundNavigation>
    
      <Formik
        initialValues={{ 
          userPicture: linkImage,
          userName: "",
          userEmail: "",

          adviceDescription: 'Limpeza',
          adviceTimeRemaining: null,
          isImpassable: undefined,
        }}
        onSubmit={values => {
          console.log(values)
          // axios()
        }}
        validationSchema={UserEditProfileSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, dirty, isValid }) => (
          <React.Fragment>
            <ProfileDetails 
              showsVerticalScrollIndicator={false} 
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
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

              <SubmitButton
                onPress={() => {
                  handleSubmit;
                  console.log(values); 
                  alert("Aviso marcado com sucesso");
                  navigation.goBack();
                }}
                style={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  opacity: !(dirty && isValid) ? 0.6 : 1,
                }}   
                disabled={!(dirty && isValid)}
                accessibilityHint="Para efetuar o envio de cadastramento do aviso, é preciso que todas as informações anteriores estejam preenchidas corretamente"
                accessibilityState={{disabled: !(dirty && isValid)}}
              >
                <Text style={{color: "#fff", fontSize: 18}}>Marcar Aviso</Text>
              </SubmitButton>
                

            </ProfileDetails>

            
          </React.Fragment>
        )}
      </Formik>
    </Container>
  )
}