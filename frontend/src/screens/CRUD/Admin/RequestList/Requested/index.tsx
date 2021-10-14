import React from "react";

import AdminLastAdvice from "../../../../../components/AdminLastAdvice";
import AdminTitleFilter from "../../../../../components/AdminTitleFilter";
import UserRequestCard from "../../../../../components/UserRequestCard";

import Background from "../../../../../assets/Admin/background.png"

import { 
  Container,
  AdviceShowList
} from "./styles";

interface IRequestListProps{ }

const RequestList: React.FC<IRequestListProps> = ({}: any) => {

  return (
    <Container showsVerticalScrollIndicator={false}>
      <AdminTitleFilter 
        text="Solicitações"
        filter={true}
        marginTop={20}
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

    </Container>
  )
}

export default RequestList;
