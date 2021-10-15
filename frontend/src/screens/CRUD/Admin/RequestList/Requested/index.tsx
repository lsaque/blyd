import React from "react";

import AdminLastAdvice from "../../../../../components/AdminLastAdvice";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";
import UserRequestCard from "../../../../../components/UserRequestCard";

import Background from "../../../../../assets/Admin/background.png"

import { 
  Container,
  AdviceShowList
} from "./styles";
import { useEffect, useState } from "react";
import { solicitacaoCadastro } from "../../../../../types/solicitacaoCadastro";
import axios from "axios";
import { BASE_URL } from "../../../../../utils/requests";

interface IRequestListProps{ }

const RequestList: React.FC<IRequestListProps> = ({}: any) => {

  const [ solicitacaoData, setSolicitacaoData ] = useState<solicitacaoCadastro[]>();

  useEffect(() => {
    axios.get(`${BASE_URL}/solicitacoes-cadastro`).then((response) => {
      const data = response.data as solicitacaoCadastro[];
      setSolicitacaoData(data);
    });
  },[])

  return (
    <Container showsVerticalScrollIndicator={false}>
      <AdminTitleFilter 
        text="Solicitações"
        filter={true}
        marginTop={20}
      />

      {
        solicitacaoData?.map(solicitacao => (
          <UserRequestCard 
            key={solicitacao.id}
            name={solicitacao.nome}
            isPCD={solicitacao.pcd}
            email={solicitacao.email}
            phoneNumber={solicitacao.celular}
            declineOnPress={() => {}} 
            acceptOnPress={() => {}}
        />
        ))
      }
{/* 
      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      />

      <UserRequestCard 
        name="Isaque José de Souza"
        isPCD={false}
        email="isaque@gmail.com"
        phoneNumber="11923456789" 
        declineOnPress={() => {}} 
        acceptOnPress={() => {}}
      /> */}

    </Container>
  )
}

export default RequestList;
