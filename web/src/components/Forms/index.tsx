/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { Formik, Field, FieldArray } from 'formik';
import { FaRegTrashAlt } from 'react-icons/fa';

import * as Yup from 'yup';

import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { 
  RadioButton, 
  RadioGroup 
} from "../_dependency/react-radio-buttons/index";

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
  mensagem: string;
}

type values = {
  adviceDescription: string;
  adviceTimeRemaining: number | undefined;
  isImpassable: boolean | undefined;
  userId: number;
  advicesLocal: string;
  internalFunc: string[];
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

const BASE_URL = "https://blyd-app.herokuapp.com";

const Forms: React.FC  = () => {
  
  const [impassable, setIsImpassable] = useState<boolean>();
  const [timeRemaining, setTimeRemaining] = useState<number>();
  const [disableButton, setDisabledButton] = useState<boolean>(false);

  const SuccessAlert = withReactContent(Swal)
  const ErrorAlert = withReactContent(Swal)

  const handleClick = (values: { internalFunc: any[] }) => {
    const arrayTeste: any[] = [];
    const arrayBoolean: boolean[] = [];
    
    values.internalFunc.forEach((element: any) => {
      arrayTeste.push(element)
    })
    
    if(arrayTeste.length === values.internalFunc.length && values.internalFunc.length > 0){
      for (let i = 0; i < values.internalFunc.length; i++) { 
        arrayBoolean.push(false)

        if((Object.values(values.internalFunc[i])[0] !== '100') && (Object.values(values.internalFunc[i])[1] !== '100')){
          Object.values(arrayBoolean)[i] = true;
        } else {
          Object.values(arrayBoolean)[i] = false;
        };
      }
    
      if(!(arrayBoolean.includes(false))){
        setDisabledButton(true);
      }
    }
  } 

  return (
    <Container>
      <Formik
        initialValues={{
          adviceDescription: '', // 'Descrição padrão para teste',
          adviceTimeRemaining: undefined,// 1,
          isImpassable: impassable, // true,
          
          userId: 1,
          advicesLocal: '',
          internalFunc: [],
        }}
        validationSchema={FormsSchema}
        onSubmit={(values: values) => {
          const hour = setHourRemaining(values.adviceTimeRemaining as number);
          const day = setDayRemaining(values.adviceTimeRemaining as number);
          const dateFinal = getFinalDate(day, hour);
          const dateNow = getNowDate();
          const timeDuration = getTimeDuration(day, hour);
          
          values.internalFunc.forEach((element) => {
            const coord = Object.values(element);
            
            if(coord[0] !== '100' && coord[1] !== '100'){
              if(values.internalFunc.indexOf(element) === values.internalFunc.length - 1) values.advicesLocal +=`${coord[0]},${coord[1]}`;
              else values.advicesLocal += `${coord[0]},${coord[1]}!`;
            }
          })

          if(values.advicesLocal.endsWith("!")){
            values.advicesLocal = values.advicesLocal.slice(0,-1);
          }

          if(values.advicesLocal !== ""){
          //  console.log(`${BASE_URL}/avisos/marcar/${values.adviceDescription}/Corredor Superior/${dateNow}/${dateFinal}/${timeDuration}/${values.advicesLocal}/${values.isImpassable}/1`);
          
            axios.get(`${BASE_URL}/avisos/marcar/${values.adviceDescription}/Corredor Superior/${dateNow}/${dateFinal}/${timeDuration}/${values.advicesLocal}/${values.isImpassable}/24`).then((response) => {
              const data = response.data as status;
              if(data.status){
                SuccessAlert.fire({
                  title: <SwalTitle>Aviso marcado 🔥</SwalTitle>,
                  html: <SwalDescription>Agradecemos por fazer parte deste lindo movimento.</SwalDescription>,
                  icon: 'success',
                  iconColor: '#8363F6',
                  confirmButtonColor: '#8363F6',
                  confirmButtonText: 'Sair',
                })
              } else {
                ErrorAlert.fire({
                  title: <SwalTitle style={{color: '#F66363'}}>Aviso não marcado</SwalTitle>,
                  html: <SwalDescription>Não foi possível realizar a criação deste aviso, favor verificar.</SwalDescription>,
                  icon: 'error',
                  iconColor: '#F66363',
                  confirmButtonColor: '#F66363',
                  confirmButtonText: 'Verificar',
                })
              }
            });
          
          } else {
            ErrorAlert.fire({
              title: <SwalTitle style={{color: '#F66363'}}>Ponto não definido</SwalTitle>,
              html: <SwalDescription>O local de aviso precisa ter pontos com números válidos.</SwalDescription>,
              icon: 'error',
              iconColor: '#F66363',
              confirmButtonColor: '#F66363',
              confirmButtonText: 'Verificar',
            })
          }

          values.advicesLocal = "";
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          dirty,
          isValid
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
                            onClick={() => array.remove(index)}
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
                        }}
                        onClick={() => {
                          array.push({x: "100", y: "100"})
                          handleClick(values)
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
            </ContentBlock>

            <ContentBlock>
              <Label>Motivo do aviso {errors.adviceDescription}</Label>
              <TextArea
                name="adviceDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adviceDescription}
              />
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
            </ContentBlock>

            <Divisor/>

            <SubmitButton 
              type="submit" 
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
