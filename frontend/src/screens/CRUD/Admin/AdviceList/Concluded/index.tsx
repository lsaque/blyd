import React from "react";
import { Text } from "react-native";

import AdminLastAdvice from "../../../../../components/AdminLastAdvice";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";

import Background from "../../../../../assets/Admin/background.png"


import { 
  Container,
  AdviceShowList
} from "./styles";
import ConcludedAdvice from "../../../../../components/ConcludedAdvice";
import { aviso } from "../../../../../types/aviso";
import { setDueDate } from "../../../../../utils/commons/generateDate";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../utils/requests";

interface IAdviceListProps{ }

const AdviceList: React.FC<IAdviceListProps> = ({navigation, route}: any) => {

  const  [ avisosData, setAvisosData ] = useState<aviso[]>();

  useEffect(() => {
    axios.get(`${BASE_URL}/avisos`).then((response) => {
      const data = response.data as aviso[];
      setAvisosData(data);
    });
  },[])

  return (
    <Container showsVerticalScrollIndicator={false}>
      <AdminTitleFilter 
        text="Avisos"
        filter={true}
        marginTop={20}
      />

      <AdviceShowList>
        {
          avisosData?.map(advice => {
          const dueDate = setDueDate(advice.tempoFinal);

            return (
              <ConcludedAdvice
              key={advice.id}
              userPicture={Background}
              userName={advice.usuario.nome}
              adviceName={`${advice.descricao} - ${advice.local}`}
              dueDay={dueDate[0]}
              dueMonth={dueDate[1]}
              dueYear={dueDate[2]} 
              onPress={() => {}}
            />
            );
          })
        }


        {/* <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        /> */}
        
      </AdviceShowList>

    </Container>
  )
}

export default AdviceList;
