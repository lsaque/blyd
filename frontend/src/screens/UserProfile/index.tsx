import React from "react";
import { Linking } from "react-native";

import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Background from "../../assets/UserList/background.png";
import Navigation from "../../components/Navigation";
import Details from "../../components/Details";
import ProfileActionButton from "../../components/ProfileActionButton";
import ProfileMenuButton from "../../components/ProfileMenuButton";
import ProfileAbout from "../../components/ProfileAbout";
import AdminTitle from "../../components/AdminTitle";
import AdminLastAdvice from "../../components/AdminLastAdvice";

import { 
  Container,
  BackgroundNavigation,
  BackgroundProfile,
  ProfileDetails,
  Buttons,
  About,
  Divisor,
} from "./styles";

interface IUserProfileProps{}

const UserProfile: React.FC<IUserProfileProps> = ({ navigation }: any) => {
  return (
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Perfil:"
          titleStrong="Isaque"
        />
      </BackgroundNavigation>
      
      <ProfileDetails showsVerticalScrollIndicator={false}>
        <BackgroundProfile source={Background} resizeMode="cover"/>

        <Details 
          avatar={Background}
          isPCD={true}
          name="Isaque José de Souza"
          email="isaque@gmail.com"
        />

        <Divisor>
          <Buttons>
            <ProfileActionButton
              isPrimary={true}
              icon={<Ionicons name="md-call" size={18} color="#8363F6" />}
              placeholder="Ligação"
              onPress={() => {
                Linking.openURL("tel:" + "1191342789")
              }}
            />

            <ProfileActionButton
              icon={<MaterialIcons name="edit" size={18} color="black" />}
              placeholder="Editar Perfil"
              onPress={() => {navigation.navigate("UserEditProfile", {})}}
            />

            <ProfileMenuButton
              onPress={() => {}}
            />
          </Buttons>
        </Divisor>

        <Divisor>
          <About>
            <ProfileAbout
              placeholder="Encontra-se em:"
              answer={"Secretaria"}
              icon={<MaterialIcons name="edit" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Chamadas realizadas:"
              answer={10}
              icon={<MaterialCommunityIcons name="phone" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Avisos marcados:"
              answer={102}
              icon={<MaterialCommunityIcons name="pin" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Rotas traçadas:"
              answer={302}
              icon={<MaterialCommunityIcons name="map-marker" size={18} color="#797979" />}
            />
          </About>
        </Divisor>

        <Divisor>
          <AdminTitle
            text="Últimos Avisos:"
            seeAll={true}
          />
          <AdminLastAdvice 
            userPicture={Background}
            userName="Isaque Souza"
            adviceHour="14:43"
            adviceName="Limpeza - corredor 2B"
            adviceTimeRemaining="2h"
            adviceImportantTag={true}
          />
          <AdminLastAdvice 
            userPicture={Background}
            userName="Isaque Souza"
            adviceHour="14:43"
            adviceName="Limpeza - corredor 2B"
            adviceTimeRemaining="5h"
            adviceImportantTag={true}
          />
          <AdminLastAdvice 
            userPicture={Background}
            userName="Isaque Souza"
            adviceHour="14:43"
            adviceName="Limpeza - corredor 2B Quintas Davi fsjoi fjsiofj oisj"
            adviceTimeRemaining="1d 25h"
            adviceImportantTag={true}
          />
        </Divisor>

      </ProfileDetails>
    </Container>
  )
}
export default UserProfile;
