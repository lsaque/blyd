import { ScrollView } from "react-native-gesture-handler";
import React, { Component, useState, useEffect, useContext } from "react";
import { StatusBar, View, PermissionsAndroid, Text, TouchableOpacity } from "react-native";
import { BackgroundImage } from "../../../styles";
import WifiManager, { WifiEntry } from "react-native-wifi-reborn";
import * as NetInfo from '@react-native-community/netinfo';

import {setAdviceHour, setDueDate } from '../../utils/commons/generateDate';


// import Accordion from 'react-native-collapsible/Accordion';
import Collapsible  from 'react-native-collapsible';

import Logo from "../../assets/Admin/logo.png";
import AdminImage from '../../assets/Admin/admin.png';
import Background from '../../assets/Admin/background.png';

import AdminDataNumber from "../../components/AdminDataNumber";
import AdminTitle from "../../components/AdminTitle";
import AdminButtonQuantityProfiles from "../../components/AdminButtonQuantityProfiles";
import AdminPhotoProfile from "../../components/AdminPhotoProfile";
import AdminLastAdvice from "../../components/AdminLastAdvice";

import { 
  Container,
  AdminHeader,
  WelcomeContainer,
  HeaderTitle,
  Description,
  Image,
  Content,
  DivisorCategory,
  GridPhotos,
  Credits,
  ImageCredits
} from "./styles";

import UserRequestCard from "../../components/UserRequestCard";
import { usuario } from "../../types/usuario";
import { aviso } from "../../types/aviso";
import { solicitacaoCadastro } from "../../types/solicitacaoCadastro";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import ApiContext from "../../contexts/ApiContext";
import { useFocusEffect } from "@react-navigation/core";

interface IAdminProps{}

const Admin: React.FC<IAdminProps> = ({ navigation }: any) => {

  const { state } = useContext(ApiContext);

  const [ usuariosData, setUsuariosData ] = useState<usuario[]>(state.usuarios);
  const [ avisosData, setAvisosData ] = useState<aviso[]>(state.avisos);
  const [ solicitacoesData, setSolicitacoesData ] = useState<solicitacaoCadastro[]>(state.solicitacoes);

  useFocusEffect(
    React.useCallback(() => {
      function setData() {
        //Avisos
        axios.get(`${BASE_URL}/avisos`).then(response => {
        setAvisosData(response.data as aviso[]);
        });

        //Usuarios
        axios.get(`${BASE_URL}/usuarios`).then(response => {
          setUsuariosData(response.data as usuario[]);
        });

        //Solicitacoes
        axios.get(`${BASE_URL}/solicitacoes-cadastro`).then(response => {
        setSolicitacoesData(response.data as solicitacaoCadastro[]);
        });
      }
      setData();
      const interval = setInterval(() => setData(), 2000)
      return () => clearInterval(interval);
    },[])
  );

  return (
    <Container>

      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="black"
      />

      <BackgroundImage 
        source={Background} 
        resizeMode="cover" style={{
          height: 200,
        }}
      >
        <AdminHeader>
          <WelcomeContainer>
            <HeaderTitle>Olá Admin,</HeaderTitle>
            <Description>Muito bem-vindo a plataforma</Description>
          </WelcomeContainer>
          <Image source={AdminImage}/>
        </AdminHeader>
      </BackgroundImage>

      <Content>
        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Dados e Atalhos"
            />
          </View>
          <ScrollView 
            horizontal={true}
            contentContainerStyle={{paddingLeft: 20}}
            automaticallyAdjustContentInsets={true}
            showsHorizontalScrollIndicator={false}
          >
            <AdminDataNumber
              category="Avisos"
              number={avisosData?.length || 0}
              backgroundColor="#957AF6"
              onPress={() => navigation.navigate('AdviceList')}
            />
            <AdminDataNumber 
              category="Usuários"
              number={usuariosData?.length || 0}
              backgroundColor="#CD7AF6"
              onPress={() => navigation.navigate('UserList')}
            />
            <AdminDataNumber 
              category="Solicitações"
              number={solicitacoesData?.length || 0}
              backgroundColor="#F69C7A"
              onPress={() => navigation.navigate('RequestList')}
            />
          </ScrollView>
        </DivisorCategory>

        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Usuários PCD's:"
              seeAll={true}
            />
          </View>
          <GridPhotos>
            {
              usuariosData?.map(usuario => {
                if(usuario.pcd) return <AdminPhotoProfile key={usuario.id} imageProfile={Background}/>
              })
            }
          </GridPhotos>
        </DivisorCategory>

        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Ultimas Solicitações:"
              seeAll={true}
            />
          </View>
          
          {
            solicitacoesData?.map(solicitacao => (
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



          {/* <UserRequestCard 
            name="Isaque José de Souza"
            isPCD={true}
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
            name="Isaque José de Souza fsajh fkjsh kfjshk "
            isPCD={true}

            email="isaque@gmail.com"
            phoneNumber="11923456789" 
            declineOnPress={() => {}} 
            acceptOnPress={() => {}}
          /> */}
        </DivisorCategory>


        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Últimos Avisos:"
              seeAll={true}
            />
            
            {
              avisosData?.map(advice => {

                const dueDate = setDueDate(advice.tempoFinal);

                return(
                  <AdminLastAdvice
                    key={advice.id}
                    userPicture={Background}
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
              })
            }
            {/* <AdminLastAdvice 
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
              onPress={() => navigation.navigate("AdviceProfile")}
            /> */}

            {/* <AdminLastAdvice 
              userPicture={Background}
              userName="Laura S"
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2B"
              adviceTimeRemaining="5h"
              isImpassable={true}
              dueDay="04"
              dueMonth="Outubro"
              dueYear="2021"
              dueHour="14"
              dueMinute="20" 
              onPress={() => navigation.navigate("AdviceProfile")}
            />
            
            <AdminLastAdvice 
              userPicture={Background}
              userName="Isaque José de Souza sda sa sa sa "
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2BoQuintasDavifsjoifjsiofjoisj fsuh uisfu ihfsiuh iufshui hfsiuh uifsh uihsiu hush"
              adviceTimeRemaining="1d"
              isImpassable={true}
              dueDay="04"
              dueMonth="Outubro"
              dueYear="2021"
              dueHour="14"
              dueMinute="20" 
              onPress={() => navigation.navigate("AdviceProfile")}
            /> */}
          </View>
        </DivisorCategory>

        <Credits>
          <ImageCredits source={Logo} resizeMode="contain"/>
        </Credits>

      </Content>
    </Container>
  )
}

export default Admin;