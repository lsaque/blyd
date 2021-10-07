import React from "react";

import AdminLastAdvice from "../../../../../components/AdminLastAdvice";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";

import Background from "../../../../../assets/Admin/background.png"

import { 
  Container,
  AdviceShowList
} from "./styles";

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
        <AdminLastAdvice
          userPicture={Background}
          userName="Leandro Master Top"
          adviceHour="14:43"
          adviceName="Limpeza - corredor 2B"
          adviceTimeRemaining="2h"
          isImpassable={false} 
          dueDay="04" 
          dueMonth="Outubro" 
          dueYear="2021"
          dueHour="14" 
          dueMinute="20"
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
        />
      </AdviceShowList>

      

    </Container>
  )
}

export default AdviceList;
