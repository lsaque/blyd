import React, { useState, useEffect, useContext} from "react";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";

import Background from "../../../../../assets/Admin/background.png"


import { 
  Container,
  AdviceShowList
} from "./styles";
import ConcludedAdvice from "../../../../../components/ConcludedAdvice";
import { aviso } from "../../../../../types/aviso";
import { setDueDate } from "../../../../../utils/commons/generateDate";
import axios from "axios";
import { BASE_URL } from "../../../../../utils/requests";
import ApiContext from "../../../../../contexts/ApiContext";
import { useFocusEffect } from "@react-navigation/core";
import { setNewAdviceList } from "../../../../../utils/commons/generateNewAdviceList";

interface IAdviceListProps{ }

const AdviceList: React.FC<IAdviceListProps> = ({ navigation }: any) => {

  const  [ avisosData, setAvisosData ] = useState<aviso[]>(useContext(ApiContext).state.avisos);

  useFocusEffect(
    React.useCallback(() => {
      function setData() {
        axios.get(`${BASE_URL}/avisos`).then(response => {
          const oldData = response.data as aviso[];
          setAvisosData(setNewAdviceList(oldData));
        })
      }
      
      setData()
      const interval = setInterval(() => setData(), 2000);
      return () => clearInterval(interval);
    },[])
  );

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
