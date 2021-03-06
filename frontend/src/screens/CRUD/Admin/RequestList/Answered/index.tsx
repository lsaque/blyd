import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";

import AdminLastAdvice from "../../../../../components/AdminLastAdvice";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";

import Background from "../../../../../assets/Admin/background.png"


import { 
  Container,
  AdviceShowList
} from "./styles";
import ConcludedAdvice from "../../../../../components/ConcludedAdvice";
import axios from "axios";
import { BASE_URL } from "../../../../../utils/requests";
import { solicitacaoCadastro } from "../../../../../types/solicitacaoCadastro";
import ApiContext from "../../../../../contexts/ApiContext";
import { useFocusEffect } from "@react-navigation/core";
import ConcludedRequest from "../../../../../components/ConcludedRequest";

interface IRequestListProps{ }

const RequestList: React.FC<IRequestListProps> = ({ }: any) => {

  const [ solicitacaoData, setSolicitacaoData ] = useState<solicitacaoCadastro[]>(useContext(ApiContext).state.solicitacoes);

  useFocusEffect(
    React.useCallback(() => {
      function setData() {
        axios.get(`${BASE_URL}/solicitacoes-cadastro`).then(response => {
          setSolicitacaoData(response.data as solicitacaoCadastro[]);
        })
      }
      
      setData();
      const interval = setInterval(() => setData(), 2000);
      return () => clearInterval(interval);
    },[])
  );

  return (
    <Container showsVerticalScrollIndicator={false}>
      <AdminTitleFilter 
        text="Solicitações"
        filter={true}
        marginTop={20}
      />

      <AdviceShowList>
        {
          solicitacaoData?.map(solicitacao => (
            <ConcludedRequest
              key={solicitacao.id}
              userPicture={"sem foto"}
              userName={solicitacao.nome}
              userEmail={solicitacao.email}
              status={solicitacao.status}
              isPCD={solicitacao.pcd}
              onPress={() => {}}
          />
          ))
        }

        
      </AdviceShowList>

    </Container>
  )
}

export default RequestList;
