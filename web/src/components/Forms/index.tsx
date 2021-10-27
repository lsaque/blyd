/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, FieldArray, useFormikContext, FormikHelpers } from 'formik';
import { RadioButton, RadioGroup } from "../_dependency/react-radio-buttons/index";
import { FaBeer, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import * as Yup from 'yup';

import { 
  Container,
  Content,
  TextArea,
  SubmitButton,
  Label,
  Divisor,
  RadioButtonText,
  ContentBlock,
  Select,
  SelectArea,
  Option,
  SelectWrapper,
  ErrorMessage,
  ActionButton,
  ActionButtonText,
  SwalTitle,
  SwalDescription
} from "./styles";

import { 
  setHourRemaining,
  setDayRemaining,
  getFinalDate,
  getNowDate,
  getTimeDuration,
} from "../../utils/getData";

interface IFormsProps{}

const FormsSchema = Yup.object({
  internalFunc: Yup.array()
  .of(
    Yup.object().shape({
      x: Yup.string().required(),
      y: Yup.string().required(),
    })
  )
  .required('(obrigatório)')
  .min(1, '(é necessário marcar ao menos 1 ponto)'),
  
  advicesLocal: Yup.string(),

  adviceDescription: Yup.string()
  .min(10, '(descrição muito pequena!)')
  .required('(obrigatório)'),

  adviceTimeRemaining: Yup.number()
  .required('(obrigatório)'),

  isImpassable: Yup.boolean()
  .required('(obrigatório)'),
})

type status = {
  status: boolean;
  mensagem: string,
}

// eslint-disable-next-line no-empty-pattern
const Forms: React.FC<IFormsProps> = ({}) => {

  const [impassable, setIsImpassable] = useState<boolean>();
  const [timeRemaining, setTimeRemaining] = useState<number>();
  const [disableButton, setDisabledButton] = useState<boolean>(false);
  const SuccessAlert = withReactContent(Swal)
  const ErrorAlert = withReactContent(Swal)

  const handleClick = (values: { internalFunc: any[] }) => {
    // console.log("verificando...")
    const arrayTeste: any[] = [];
    const arrayBoolean: boolean[] = [];
    
    values.internalFunc.forEach((element: any) => {
      arrayTeste.push(element)
    })
    
    if(arrayTeste.length === values.internalFunc.length && values.internalFunc.length > 0){
      for (let i = 0; i < values.internalFunc.length; i++) { // encontrar o elemento (x, y)
        arrayBoolean.push(false)
        // console.log(arrayBoolean)

        if((Object.values(values.internalFunc[i])[0] !== '100') && (Object.values(values.internalFunc[i])[1] !== '100')){
          console.log("setou true")
          // setDisabledButton(false)
          Object.values(arrayBoolean)[i] = true;
        } else {
          console.log("setou false")
          // arrayBoolean.push(true)
          Object.values(arrayBoolean)[i] = false;
        };
      }
      console.log(arrayBoolean);
      
      if(!(arrayBoolean.includes(false))){
        console.log("fim")
        setDisabledButton(true);
      }
    }
  }

  const dataIsImpassable = [
    {
      key: 0,
      value: "true",
      label: "Transitável",
    },
    {
      key: 1,
      value: "false",
      label: "Intransitável",
    },
  ];

  const dataTimeRemaining = [
    {
      key: 0,
      value: 1,
      label: "Até 1 hora",
    },
    {
      key: 1,
      value: 2,
      label: "Até 3 horas",
    },
    {
      key: 2,
      value: 3,
      label: "Até 1 dia",
    },
    {
      key: 3,
      value: 4,
      label: "Até 3 dias",
    },
  ];

  const dataOptionNumbers = [
    {key: 0, value: 0, label: 1},
    {key: 1, value: 1, label: 2},
    {key: 2, value: 2, label: 3},
    {key: 3, value: 3, label: 4},
    {key: 4, value: 4, label: 5},
    {key: 5, value: 5, label: 6},
    {key: 6, value: 6, label: 7},
    {key: 7, value: 7, label: 8},
    {key: 8, value: 8, label: 9},
    {key: 9, value: 9, label: 10},
    {key: 10, value: 10, label: 11},
    {key: 11, value: 11, label: 12},
    {key: 12, value: 12, label: 13},
    {key: 13, value: 13, label: 14},
    {key: 14, value: 14, label: 15},
    {key: 15, value: 15, label: 16},
    {key: 16, value: 16, label: 17},
    {key: 17, value: 17, label: 18},
    {key: 18, value: 18, label: 19},
    {key: 19, value: 19, label: 20},
    {key: 20, value: 20, label: 21},
    {key: 21, value: 21, label: 22},
    {key: 22, value: 22, label: 23},
    {key: 23, value: 23, label: 24},
    {key: 24, value: 24, label: 25},
    {key: 25, value: 25, label: 26},
    {key: 26, value: 26, label: 27},
    {key: 27, value: 27, label: 28},
    {key: 28, value: 28, label: 29},
    {key: 29, value: 29, label: 30},
    {key: 30, value: 30, label: 31},
    {key: 31, value: 31, label: 32},
    {key: 32, value: 32, label: 33},
    {key: 33, value: 33, label: 34},
    {key: 34, value: 34, label: 35},
    {key: 35, value: 35, label: 36},
    {key: 36, value: 36, label: 37},
    {key: 37, value: 37, label: 38},
    {key: 38, value: 38, label: 39},
    {key: 39, value: 39, label: 40},
    {key: 40, value: 40, label: 41},
    {key: 41, value: 41, label: 42},
    {key: 42, value: 42, label: 43},
    {key: 43, value: 43, label: 44},
    {key: 44, value: 44, label: 45},
    {key: 45, value: 45, label: 46},
    {key: 46, value: 46, label: 47},
    {key: 47, value: 47, label: 48},
    {key: 48, value: 48, label: 49},
    {key: 49, value: 49, label: 50},
  ];

  const dataOptionLetters = [
    {key: 0, value: 0, label: "A"},
    {key: 1, value: 1, label: "B"},
    {key: 2, value: 2, label: "C"},
    {key: 3, value: 3, label: "D"},
    {key: 4, value: 4, label: "E"},
    {key: 5, value: 5, label: "F"},
    {key: 6, value: 6, label: "G"},
    {key: 7, value: 7, label: "H"},
    {key: 8, value: 8, label: "I"},
    {key: 9, value: 9, label: "J"},
    {key: 10, value: 10, label: "K"},
    {key: 11, value: 11, label: "L"},
    {key: 12, value: 12, label: "M"},
    {key: 13, value: 13, label: "N"},
    {key: 14, value: 14, label: "O"},
    {key: 15, value: 15, label: "P"},
    {key: 16, value: 16, label: "Q"},
    {key: 17, value: 17, label: "R"},
    {key: 18, value: 18, label: "S"},
    {key: 19, value: 19, label: "T"},
    {key: 20, value: 20, label: "U"},
    {key: 21, value: 21, label: "V"},
    {key: 22, value: 22, label: "W"},
  ];

  interface values {
    adviceDescription: string,
    adviceTimeRemaining: number,
    isImpassable: boolean,
    userId: number,
    advicesLocal: string,
    internalFunc: string[], 
  }  

  const BASE_URL = "https://blyd-app.herokuapp.com";

  return (
    <Container>
      <Formik
        initialValues={{
          adviceDescription: 'opaaaaaaaaa',
          adviceTimeRemaining: 1,
          isImpassable: true,
          // adviceDescription: '',
          // adviceTimeRemaining: undefined || 0, 
          // isImpassable: impassable, 
          
          userId: 1,
          advicesLocal: '',
          internalFunc: [], // value de teste
        }}
        validationSchema={FormsSchema}
        onSubmit={values => {

          values.internalFunc.forEach((element) => {
            const coord = Object.values(element);
            
            if(coord[0] !== '100' && coord[1] !== '100'){
              if(values.internalFunc.indexOf(element) === values.internalFunc.length - 1) values.advicesLocal +=`${coord[0]},${coord[1]}`;
              else values.advicesLocal += `${coord[0]},${coord[1]}!`;
            }
          })

          // console.log(values)
          const hour = setHourRemaining(values.adviceTimeRemaining);
          const day = setDayRemaining(values.adviceTimeRemaining);
          const dateFinal = getFinalDate(day, hour);
          const dateNow = getNowDate();
          const timeDuration = getTimeDuration(day, hour);

          console.log(`${BASE_URL}/avisos/marcar/${values.adviceDescription}/Corredor Superior/${dateNow}/${dateFinal}/${timeDuration}/${values.advicesLocal}/${values.isImpassable}/1`);

          // axios.get(`${BASE_URL}/avisos/marcar/${values.adviceDescription}/Corredor Superior/${dateNow}/${dateFinal}/${timeDuration}/${values.advicesLocal}/${values.isImpassable}/1`).then((response) => {
          //   const data = response.data as status;
          //   if(data.status){
          //     SuccessAlert.fire({
          //       title: <SwalTitle>Aviso marcado 🔥</SwalTitle>,
          //       html: <SwalDescription>Agradecemos por fazer parte deste lindo movimento.</SwalDescription>,
          //       icon: 'success',
          //       iconColor: '#8363F6',
          //       confirmButtonColor: '#8363F6',
          //       confirmButtonText: 'Sair',
          //     })
          //   } else {
          //     ErrorAlert.fire({
          //       title: <SwalTitle style={{color: '#F66363'}}>Aviso não marcado</SwalTitle>,
          //       html: <SwalDescription>Não foi possível realizar a criação deste aviso, favor verificar.</SwalDescription>,
          //       icon: 'error',
          //       iconColor: '#F66363',
          //       confirmButtonColor: '#F66363',
          //       confirmButtonText: 'Verificar',
          //     })
          //   }
          // });
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          dirty,
          isValid,
          handleReset,
          submitForm
        }) => (
          <Content onSubmit={handleSubmit}>
            <Divisor/>

            <ContentBlock>

              <Label>Local do aviso {errors.internalFunc}</Label>
              <FieldArray
                name={"internalFunc"}
                render={array => (
                  <>
                    <SelectArea onChange={() => {}}>
                    {values.internalFunc && values.internalFunc.length > 0 ? (
                      values.internalFunc?.map((adviceLocal, index) => (
                        <SelectWrapper key={index}>

                          <Field 
                            as={Select} 
                            name={`internalFunc.${index}.x`} 
                            // onChangeCapture={() => handleClick(values)}
                            // onChangeCapture={() => console.log("opaaaaaa")}
                            // onSubmitEditing={() => console.log("agoravai")}
                          >
                            <Option value={"100"} hidden disabled>Letra</Option>
                            {dataOptionLetters?.map(letter => (
                              <Option 
                                value={`${letter.value}`} 
                                key={letter.key}
                              >
                                {letter.label}
                              </Option>
                            ))}
                          </Field>

                          <Field 
                            as={Select} 
                            name={`internalFunc.${index}.y`} 
                            // onChangeCapture={() => handleClick(values)}
                            // onChangeCapture={() => console.log("opaaaaaa")}
                            // ref={selectRef}
                          >
                            <Option value={"100"} hidden disabled>Numero</Option>
                            {dataOptionNumbers?.map(number => (
                              <Option 
                                placeholder="opa"
                                value={`${number.value}`} 
                                key={number.key}
                              >
                                {number.label}
                              </Option>
                            ))}
                          </Field>

                          <ActionButton
                            type="button"
                            style={{
                              maxWidth: 48,
                              backgroundColor: "#FFE4E4",
                            }}
                            onClick={() => {
                              array.remove(index)
                              // handleClick(values)
                            }} // insert an empty string at a position
                          >
                            <FaRegTrashAlt size="1.4em" style={{ fill: '#F66363' }}/>
                          </ActionButton>
                        </SelectWrapper>
                      ))) : null } 

                      <ActionButton
                        type="button"
                        style={{
                          borderColor: "#8363F6",
                          borderStyle: "dashed",
                          marginBottom: 30
                          // backgroundColor: "#8363F6"
                          // backgroundColor: "#63f677"
                        }}
                        // autoFocus={true}
                        onClick={() => {
                          // handleClick(values)
                          // contentRef.current.focus();
                          array.push({x: "100", y: "100"})
                          handleClick(values)
                          // funcValue.push()
                          // setInternalFunc(values.internalFunc)
                        }}
                      >
                        <ActionButtonText>
                          Adicionar
                        </ActionButtonText>
                      </ActionButton>
                    
                    </SelectArea>
                  </>
                )}
              />
              {/* <ErrorMessage>{errors.internalFunc}</ErrorMessage> */}
            </ContentBlock>

            <ContentBlock>
              <Label>Motivo do aviso {errors.adviceDescription}</Label>
              <TextArea
                name="adviceDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adviceDescription}
                // placeholder="Descreva o acontecimento"
              />
              {/* <ErrorMessage></ErrorMessage> */}
            </ContentBlock>

            <ContentBlock>
              <Label>Duração do alerta {errors.adviceTimeRemaining}</Label>
              <RadioGroup 
                value={timeRemaining}
                onChange={(timeNumber: any) => {
                  setTimeRemaining(timeNumber);
                  setFieldValue("adviceTimeRemaining", timeNumber);
                  handleChange("adviceTimeRemaining");
                }}
                horizontal
              >
                {dataTimeRemaining?.map((data) => (
                  <RadioButton 
                    key={data.key}
                    value={data.value}
                  >
                    <RadioButtonText>{data.label}</RadioButtonText>
                  </RadioButton>
                ))}
              </RadioGroup>
              {/* <ErrorMessage>{errors.adviceTimeRemaining}</ErrorMessage> */}
            </ContentBlock>

            <ContentBlock>
              <Label>Situação de passagem {errors.isImpassable}</Label>
              <RadioGroup 
                value={impassable}
                onChange={ (e: any) => {
                  let impassableBool = false;
                  if (e === 'true') { impassableBool = true }
                  
                  setIsImpassable(impassableBool);
                  setFieldValue("isImpassable", impassableBool);
                  handleChange("isImpassable");
                }}
                horizontal
              >
                {dataIsImpassable?.map((data) => (
                  <RadioButton 
                    value={data.value}
                    key={data.key}  
                  >
                    <RadioButtonText>{data.label}</RadioButtonText>
                  </RadioButton>
                ))}
              </RadioGroup>
              {/* <ErrorMessage>{errors.isImpassable}</ErrorMessage> */}
            </ContentBlock>

            <Divisor/>

            <SubmitButton 
              type="submit" 
              onClick={() => {
                // values.internalFunc.forEach((element) => {
                //   const coord = Object.values(element);
                  
                //   if(coord[0] !== '100' && coord[1] !== '100'){
                //     if(values.internalFunc.indexOf(element) === values.internalFunc.length - 1) values.advicesLocal +=`${coord[0]},${coord[1]}`;
                //     else values.advicesLocal += `${coord[0]},${coord[1]}!`;
                //   }
                // })
              }}
              disabled={!(dirty && isValid)}
              style={{
                opacity: !(dirty && isValid) ? 0.6 : 1,
                fontSize: 16,
              }} 
            >
              Marcar Aviso
            </SubmitButton>
          </Content>
        )}
      </Formik>
    </Container>
  )
}
export default Forms;
