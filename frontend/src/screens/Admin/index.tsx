import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar, View, PermissionsAndroid } from "react-native";
import { BackgroundImage } from "../../../styles";
import WifiManager, { WifiEntry } from "react-native-wifi-reborn";
import * as NetInfo from '@react-native-community/netinfo';

import Logo from "../../assets/Admin/logo.png";

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

import AdminImage from '../../assets/Admin/admin.png';
import Background from '../../assets/Admin/background.png';
import AdminDataNumber from "../../components/AdminDataNumber";
import AdminTitle from "../../components/AdminTitle";
import AdminButtonQuantityProfiles from "../../components/AdminButtonQuantityProfiles";
import AdminPhotoProfile from "../../components/AdminPhotoProfile";
import AdminLastAdvice from "../../components/AdminLastAdvice";

interface IAdminProps{}

const Admin: React.FC<IAdminProps> = ({ navigation }: any) => {

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
              number={400}
              backgroundColor="#957AF6"
              onPress={() => navigation.navigate('AdviceList')}
            />
            <AdminDataNumber 
              category="Usuários"
              number={212}
              backgroundColor="#CD7AF6"
              onPress={() => navigation.navigate('UserList')}
            />
            <AdminDataNumber 
              category="Solicitações"
              number={12}
              backgroundColor="#F69C7A"
              onPress={() => navigation.navigate('MarkAdvice')}
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
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminPhotoProfile imageProfile={Background}/>
            <AdminButtonQuantityProfiles number={86}/>
          </GridPhotos>
        </DivisorCategory>

        <DivisorCategory>
          <View style={{marginHorizontal:20}}>
            <AdminTitle
              text="Últimos Avisos:"
              seeAll={true}
            />
            
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
              userName="Laura Souza Silva Santos"
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2B"
              adviceTimeRemaining="5h"
              isImpassable={true}
              dueDay="04" 
              dueMonth="Outubro" 
              dueYear="2021"
              dueHour="14" 
              dueMinute="20"
            />
            
            <AdminLastAdvice 
              userPicture={Background}
              userName="Isaque José de Souza"
              adviceHour="14:43"
              adviceName="Limpeza - corredor 2BoQuintasDavifsjoifjsiofjoisj fsuh uisfu ihfsiuh iufshui hfsiuh uifsh uihsiu hush"
              adviceTimeRemaining="1d"
              isImpassable={true} 
              dueDay="04" 
              dueMonth="Outubro" 
              dueYear="2021"
              dueHour="14" 
              dueMinute="20"
            />
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