import React from "react";
import styled from "styled-components/native";

import { Formik } from 'formik';
import { Picker } from "@react-native-community/picker";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid red; */
  align-items: center;
  margin: 50px 0 25px 0;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #707070;
  padding: 0 20px;
  /* border: 1px solid green; */
`; 

const OrderByStyle = styled.View`
  margin: 0 20px 0 0;
  border: 1px solid #ECECEC;
  border-radius: 10px;
`;

interface IAdminTitleFilterProps{
  text: string,
  filter?: boolean,
  onPress?: any,
}

const AdminTitleFilter: React.FC<IAdminTitleFilterProps> = ({text, filter, onPress}) => {

  let filterRender = <React.Fragment/>;

  if(filter){
    filterRender = (
      <Picker
        mode="dropdown"
        style={{ height: 40, width: 150}}
      >
        <Picker.Item label="Ordenar:" value={0} key={0}/>
        <Picker.Item label="ID" value={1} key={1}/>
        <Picker.Item label="Setor" value={2} key={2}/>
        <Picker.Item label="Ordem Alfabética" value={3} key={3}/>
      </Picker>
    )
  }

  return (
    <Container>
      <Title>{text}</Title>
      <Formik
        initialValues={{ orderBy: '' }}
        onSubmit={values => {
          console.log(values)
          // axios()
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <OrderByStyle>
            {filterRender}
          </OrderByStyle>
        )}
      </Formik>
    </Container>
    
  )
}
export default AdminTitleFilter;
