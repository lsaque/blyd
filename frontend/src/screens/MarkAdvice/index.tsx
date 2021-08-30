import React, { useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { Button, Dimensions, Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';

import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import IconInput from '../../components/IconInput';

import Background from '../../assets/MarkAdvice/background.png';

import { 
  Container,
  // ImagePage,
  // Title,
  // Strong,
  Content,
  RadioArea,
  RadioComponent,
  LabelText,
  MarkAdviceButton,
  // Wrapper,
  // Row
} from './styles';

import TextInput from '../../components/TextInput';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
import { RadioButtonItem } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonItem';


function getDate(day: number, hour: number) {
    
  const date = new Date();

  const datePerson = date.getDate() + day;
  const mounthPerson = date.getMonth() + 1;
  const yearPerson = date.getFullYear();
  const hourPerson = (date.getHours() + hour) % 24;
  const minutePerson = date.getMinutes();

  return `${datePerson}/${mounthPerson}/${yearPerson}/${hourPerson}/${minutePerson}`;
}

export default function Localization({navigation} : any){

  const [isFocus, setFocus] = useState(false);

  return(
    <React.Fragment>
      <Container>
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Marcar"
          titleStrong="Aviso"
        />
        <Content
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Formik
            initialValues={{ 
              advice: '',
              timeDuration: '',
              isPassable: '',
            }}
            onSubmit={values => {
              console.log(values)
              // axios()
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  text="O que esta acontecendo?"
                  onChangeText={handleChange('advice')}
                  onBlur={handleBlur('advice')}
                  value={values.advice}
                />

                <LabelText>Qual a duração do alerta?</LabelText>
                <RadioButton.Group
                  onValueChange={handleChange('timeDuration')}
                  value={values.timeDuration}
                >
                  <RadioComponent>
                    <RadioArea
                      style={{
                        borderWidth: isFocus ? 1.5 : 0,
                        // borderWidth:1.5,
                      }}
                    >
                      <RadioButton.Item
                        labelStyle={{color:'#4d4d4d'}}
                        color='#8749FC'
                        label="Até 1 hora"
                        value={getDate(0,1)}
                      />
                    </RadioArea>
                    <RadioArea>
                      <RadioButton.Item
                        labelStyle={{color:'#4d4d4d'}}
                        color='#8749FC'
                        label="Até 3 horas"
                        value={getDate(0,3)}

                      />
                    </RadioArea>
                    <RadioArea>
                      <RadioButton.Item
                        labelStyle={{color:'#4d4d4d'}}
                        color='#8749FC'
                        label="Até 1 dia"
                        value={getDate(1,0)}
                      />
                    </RadioArea>
                    <RadioArea>
                      <RadioButton.Item
                        labelStyle={{color:'#4d4d4d'}}
                        color='#8749FC'
                        label="Até 3 dias"
                        value={getDate(3,0)}
                      />
                    </RadioArea>
                  </RadioComponent>
               </RadioButton.Group>
               
               <LabelText>Qual a situação da passagem?</LabelText>
               <RadioButton.Group
                  onValueChange={handleChange('isPassable')}
                  value={values.isPassable}
                >
                  <RadioComponent>
                    <RadioArea>
                      <RadioButton.Item
                        labelStyle={{color:'#4d4d4d'}}
                        color='#8749FC'
                        label="Transitável"
                        value="true"
                      />
                    </RadioArea>

                    <RadioArea style={{marginBottom: 35}}>
                      <RadioButton.Item
                        labelStyle={{color:'#4d4d4d'}}
                        color='#8749FC'
                        label="Intransitável"
                        value="false"
                      />
                    </RadioArea>
                  </RadioComponent>

               </RadioButton.Group>
               
                <MarkAdviceButton
                  filled 
                  text="Marcar"
                  onPress={() => {
                    console.log(values); 
                    handleSubmit
                  }}   
                />
              </View>
            )}
          </Formik>

        </Content>

      </Container>
    </React.Fragment>
  )
}