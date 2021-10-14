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

interface IRequestListProps{ }

const RequestList: React.FC<IRequestListProps> = ({

}: any) => {

  return (
    <Container showsVerticalScrollIndicator={false}>
      <AdminTitleFilter 
        text="Solicitações"
        filter={true}
        marginTop={20}
      />

      <AdviceShowList>

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

export default RequestList;
