import React, { useState, useEffect, useContext } from "react";

import AdminLastAdvice from "../../../../../components/AdminLastAdvice";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";

import Background from "../../../../../assets/Admin/background.png"

import { 
  Container,
  AdviceShowList
} from "./styles";
import { aviso } from "../../../../../types/aviso";
import { setAdviceHour, setDueDate } from "../../../../../utils/commons/generateDate";
import axios from "axios";
import { BASE_URL } from "../../../../../utils/requests";
import ApiContext from "../../../../../contexts/ApiContext";
import { useFocusEffect } from "@react-navigation/core";
import { setNewAdviceList } from "../../../../../utils/commons/generateNewAdviceList";

interface IAdviceListProps{ }

const AdviceList: React.FC<IAdviceListProps> = ({navigation, route} : any) => {

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
            if(advice.status) {
              return(
                <AdminLastAdvice
                  key={advice.id}
                  userPicture={advice.usuario.foto}
                  userName={advice.usuario.nome}
                  adviceHour={setAdviceHour(advice.tempoInicio)}
                  adviceName={`${advice.descricao} - ${advice.local}`}
                  adviceTimeRemaining={advice.duracao}
                  isImpassable={advice.transitavel}
                  dueDay={dueDate[0]}
                  dueMonth={dueDate[1]}
                  dueYear={dueDate[2]}
                  dueHour={dueDate[3]}
                  dueMinute={dueDate[4]}
                  onPress={() => navigation.navigate("AdviceProfile", {advice : advice})}
              /> 
              );
            }
          })
        }
        
        {/* <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        
        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        />

        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={true}
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021"
          dueHour="14"
          dueMinute="20" 
          onPress={() => {}}
        /> */}
      </AdviceShowList>

      

    </Container>
  )
}

export default AdviceList;
