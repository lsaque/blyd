import React, { useRef, useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Advice/background.png';
import iconPage from '../../assets/Advice/iconPage.png';

import ParallaxHeader from '@fabfit/react-native-parallax-header';

import { 
  // Container,
  ImagePage,
  Title,
  Strong,
  Content,
  Wrapper,
  Row,
} from '../../assets/Styles/PageCardTemplate/styles';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Container, Label, TextArea, TextAreaInput, RadioArea, ErrorMessage, SubmitButton } from '../../assets/Styles/PageCRUDTemplate/styles';
import RadioButtonRN from '../../components/_dependency/radio-buttons-react-native/RadioButtonRN';
// import { RadioArea } from '../MarkAdvice/styles';
import { BackgroundNavigation, ProfileDetails, Divisor, AdviceDetails } from '../UserProfile/styles';

const AdviceSchema = Yup.object().shape({

  adviceDescription: Yup.string()
  .min(5, 'Aviso muito pequeno!')
  .required('Obrigatório ter uma descrição de aviso'),

  adviceTimeRemaining: Yup.number()
  .required(''),

  isImpassable: Yup.boolean()
  .required(''),
})

export default function Localization({navigation}:any){

  const uriBackground = Image.resolveAssetSource(Background).uri;
  const [ showMarkAdvice, setShowMarkAdvice] = useState(true);
  const [ descriptionAdvice, setDescriptionAdvice] = useState("");

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

  const advice = [
    {
      key: 1,
      badge: true,
      text: "Estação de trabalho", 
    },
    {
      key: 2,
      badge: false,
      text: "Manutenção", 
    },
    {
      key: 3,
      badge: false,
      text: "Limpeza", 
    },
    {
      key: 4,
      badge: false,
      text: "Objeto", 
    },
    {
      key: 5,
      badge: false,
      text: "Obstrução", 
    },
    {
      key: 6,
      badge: false,
      text: "Ajuda", 
    },
  ];

  return(
    <ParallaxHeader
      maxHeight={showMarkAdvice ? 225 : 195}
      minHeight={80}
      renderOverlay={ () =>
        <View style={{ paddingHorizontal: 20 }}>
          <Navigation
            onPress={ () => {
              if(showMarkAdvice != false){
                navigation.goBack('history')
              } else {
                setShowMarkAdvice(true)
              }
            }}
            title="Marcar"
            titleStrong="Aviso"
            lightContent={false}
          />
        </View>
      }
      heroImage={{ uri: uriBackground }}
    >
      <Container>
        <Content>
          <Title
            accessibilityHint="Título dizendo para informar o aviso, juntamente de um ícone de bola de cristal"
          >Informe o <Strong>Aviso</Strong> 🔮</Title>
          <Wrapper>
            {showMarkAdvice ? 
              advice?.map(advice => (
                <PageCard
                  key={advice.key}
                  badge={advice.badge}
                  text={advice.text}
                  accessibilityHint={"Clique para dizer que deseja descrever o aviso como" + advice.text}
                  backgroundColor={{backgroundColor: '#DCD2FF'}}
                  onPress={()=> {
                    setDescriptionAdvice(advice.text)
                    setShowMarkAdvice(!showMarkAdvice)
                  }}
                  // onPress={() => navigation.navigate('MarkAdvice')}
                />
              )) : (
                <Container>
                  <Formik
                    initialValues={{ 
                      adviceDescription: descriptionAdvice,
                      adviceTimeRemaining: null,
                      isImpassable: true,
                    }}
                    onSubmit={values => {
                      console.log(values)
                      // axios()
                    }}
                    validationSchema={AdviceSchema}
                  >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, dirty, isValid }) => (
                      <React.Fragment>
                        <AdviceDetails 
                          showsVerticalScrollIndicator={false} 
                          keyboardShouldPersistTaps="handled"
                          keyboardDismissMode="on-drag"
                        >
                          <Divisor>
                            <View accessibilityHint="Preencha este campo com uma breve descrição do motivo do aviso">
                              <Label>Motivo do aviso</Label>
                              <TextArea>
                                <TextAreaInput
                                  keyboardType={"ascii-capable"}
                                  value={values.adviceDescription}
                                  onChangeText={ handleChange("adviceDescription") }
                                  onBlur={ handleBlur("adviceDescription") }
                                  placeholder="Preencha com a descrição do aviso"
                                  returnKeyType="next"
                                  multiline={true}
                                />
                              </TextArea>
                              <ErrorMessage>{errors.adviceDescription}</ErrorMessage>
                            </View>

                            <View accessibilityHint="Clique para informar o prazo de validade do aviso">
                              <Label>Qual a duração de alerta?</Label>
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
                            </View>

                            <View accessibilityHint="Clique para informar a situação de passagem do corredor onde localiza esse aviso">
                              <Label>Qual a situação de passagem?</Label>
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
                            </View>

                          </Divisor>
                        </AdviceDetails>

                        <SubmitButton
                          onPress={() => {
                            handleSubmit;
                            console.log(values); 
                            alert("Aviso marcado com sucesso");
                            navigation.goBack();
                          }}
                          style={{
                            marginHorizontal: 20,
                            opacity: !(dirty) ? 0.6 : 1,
                          }}   
                          disabled={!(dirty && isValid)}
                          accessibilityHint="Para efetuar o envio de cadastramento do aviso, é preciso que todas as informações anteriores estejam preenchidas corretamente"
                          accessibilityState={{disabled: !(dirty && isValid)}}
                        >
                          <Text style={{color: "#fff", fontSize: 18}}>Marcar Aviso</Text>
                        </SubmitButton>
                      </React.Fragment>
                    )}
                  </Formik>
                </Container>
              )
            }
          </Wrapper>
        </Content>
      </Container>
    </ParallaxHeader>
  )
}
