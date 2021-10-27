import React, { useContext } from "react";
import { Alert, Text, View } from "react-native";
import { BackgroundNavigation, BackgroundProfile, Divisor, ProfileDetails } from "../../../UserProfile/styles";
import { Formik } from "formik";

import * as Yup from 'yup';

import RadioButtonRN from "../../../../components/_dependency/radio-buttons-react-native/RadioButtonRN";
import Navigation from "../../../../components/Navigation";
import Details from "../../../../components/Details";

import {setHourRemaining, setDayRemaining, getFinalDate, getTimeDuration} from '../../../../utils/commons/generateDate';

import Background from "../../../../assets/UserList/background.png";

import { 
  Container,
  Label,
  TextArea,
  TextAreaInput,
  RadioArea,
  SubmitButton,
  ErrorMessage,
  PickerArea
} from "../../../../assets/Styles/PageCRUDTemplate/styles";
import { Picker } from "@react-native-community/picker";
import axios from "axios";
import { BASE_URL } from "../../../../utils/requests";
import { status } from "../../../../types/status";
import { aviso } from "../../../../types/aviso";
import ApiContext from "../../../../contexts/ApiContext";
import { showAlert } from "../../../../utils/commons/showAlert";

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


const AdviceEditProfile: React.FC<IAdviceEditProfileProps> = ({ navigation, route }: any) => {
  
  let linkImage = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
  const { advice } = route.params;
  const adviceData = advice as aviso;

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
            userPicture: "https://i.ibb.co/z6QY6m0/without-Photo.png",
            userName: "Isaque José de Souza",
            userEmail: "isaque@gmail.com",
            
            adviceDescription: `${adviceData.descricao}`,
            adviceTimeRemaining: 3,
            localAdvice: "",
            isImpassable: true,
          }}
          validationSchema={UserEditProfileSchema}
          onSubmit={values => {
            const hour = setHourRemaining(values.adviceTimeRemaining);
            const day = setDayRemaining(values.adviceTimeRemaining);
            const dateFinal = getFinalDate(day, hour);
            const timeDuration = getTimeDuration(day, hour);

            // @GetMapping(value = "/atualizar/{id}/{descricao}/{local}/{duracao}/{tempoFinal}/{transitavel}")
            axios.get(`${BASE_URL}/avisos/atualizar/${adviceData.id}/${values.adviceDescription}/${values.localAdvice}/${timeDuration}/${dateFinal}/${values.isImpassable}`).then((response) => {
              const data = response.data as status;
              showAlert(data.status, data.mensagem);
              navigation.navigate('AdviceList');
            });
            // console.log(`${adviceData.id}/${values.adviceDescription}/${values.localAdvice}/${timeDuration}/${dateFinal}/${values.isImpassable}`);
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
                  avatar={{uri: adviceData.usuario.foto == "sem foto" ? values.userPicture : adviceData.usuario.foto}}
                  isPCD={adviceData.usuario.pcd}
                  markedAdvice={true}
                  name={adviceData.usuario.nome}
                  email={adviceData.usuario.email}
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


                  <Label>Local de Aviso</Label>
                    <PickerArea>
                      <Picker
                        mode="dialog"
                        // prompt="Selecione uma opção:"
                        selectedValue={values.localAdvice}
                        onValueChange={(itemValue, itemIndex) => {
                          setFieldValue("localAdvice", itemValue)
                          handleChange("localAdvice");
                        }}
                        style={{
                          borderWidth: 1,
                          color: "#565656"
                        }}
                        itemStyle={{
                          marginLeft: 80,
                        }}
                      >
                        <Picker.Item label="Recepção" value={"Recepção"} key={0}/>
                        <Picker.Item label="Hall Recepção" value={"Hall Recepção"} key={1}/>
                        <Picker.Item label="HelpDesk Recepção" value={"HelpDesk Recepção"} key={2}/>
                        <Picker.Item label="Corredor Inferior" value={"Corredor Inferior"} key={3}/>
                        <Picker.Item label="Corredor Superior" value={"Corredor Superior"} key={4}/>
                        <Picker.Item label="Sala de Reunião" value={"Sala de Reunião"} key={5}/>
                      </Picker>
                    </PickerArea>
                    <ErrorMessage>{errors.localAdvice}</ErrorMessage>

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

              <View style={{marginHorizontal: 20}}>
                <SubmitButton
                  onPress={() => {
                    handleSubmit();
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
              </View>
            </React.Fragment>
          )}
        </Formik>
    </Container>
  )
}

export default AdviceEditProfile;
