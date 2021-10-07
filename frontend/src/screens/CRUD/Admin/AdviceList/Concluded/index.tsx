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

interface IAdviceListProps{ }

const AdviceList: React.FC<IAdviceListProps> = ({

}: any) => {

  return (
    <Container showsVerticalScrollIndicator={false}>
      <AdminTitleFilter 
        text="Avisos"
        filter={true}
        marginTop={20}
      />

      <AdviceShowList>
        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B"
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
        />

        <ConcludedAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceName="Limpeza - corredor 2B SOIJ FIOSJ OIFJSAOI JFOISAJ OIFJASOIJF OISAJIO JFSAIOJ OIFJS OFJSO JO"
          dueDay="04"
          dueMonth="Outubro"
          dueYear="2021" onPress={() => {}}
        />
        
      </AdviceShowList>

    </Container>
  )
}

export default AdviceList;
