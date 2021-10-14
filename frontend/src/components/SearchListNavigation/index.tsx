import React from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { Formik } from 'formik';
import { View } from 'react-native';

const InputArea = styled.KeyboardAvoidingView`
  margin-top: 20px;
  flex-direction: row;
  background-color: #FFF;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 40px;
  position: relative;
  /* top: 0; */
  z-index: -1;
`;

const ButtonSearch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 15%;
`;

const Input = styled.TextInput`
  height: 100%;
  width: 70%; 
  font-size: 16px;
`;

interface ISearchListNavigationProps{
  text: String,
  onPress?: Function,
}

const SearchListNavigation: React.FC<ISearchListNavigationProps> = ({ onPress, text }: any) => {
  return(
    <View
      accessibilityHint={text}
    >

      <Formik
        initialValues={{ filterBy: '' }}
        onSubmit={values => {
          console.log(values)
          // axios()
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <InputArea 
            style={{elevation: 30}}
          >
            <ButtonSearch onPress={onPress}>
              <SimpleLineIcons name="arrow-left" size={16} color="#999999" />
            </ButtonSearch>
      
            <Input 
              placeholder={text}
              onChangeText={handleChange("filterBy")}
              onBlur={handleBlur("filterBy")}
              value={values.filterBy}
              returnKeyType={'search'}
              onSubmitEditing={() => {
                console.log(values);
                handleSubmit;
              }}
            />
            <ButtonSearch onPress={() => {
              console.log(values);
              handleSubmit;
            }}>
              <Feather name="search" size={22} color="#999999"/>
            </ButtonSearch>
          </InputArea>
        )}
      </Formik>
    </View>
  );
}

export default SearchListNavigation;
