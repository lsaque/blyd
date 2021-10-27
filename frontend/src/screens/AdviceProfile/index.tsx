import React from "react";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import Navigation from "../../components/Navigation";
import Details from "../../components/Details";
import ProfileActionButton from "../../components/ProfileActionButton";
import ProfileMenuButton from "../../components/ProfileMenuButton";
import ProfileAbout from "../../components/ProfileAbout";

// import Background from "../../assets/UserList/background.png";
import BackgroundAdmin from "../../assets/Admin/background.png";
import BackgroundUser from '../../assets/Activity/background.png'


import { 
  Container,
  BackgroundNavigation,
  BackgroundProfile,
  ProfileDetails,
  Buttons,
  About,
  Divisor,
} from "./styles";
import { useState } from "hoist-non-react-statics/node_modules/@types/react";
import { aviso } from "../../types/aviso";
import { usuario } from "../../types/usuario";
import { setAdviceHour, setDueDate } from "../../utils/commons/generateDate";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { status } from "../../types/status";
import { showAlert } from "../../utils/commons/showAlert";

interface IAdviceProfileProps{}

const AdviceProfile: React.FC<IAdviceProfileProps> = ({ navigation, route }: any) => {

  const { advice } = route.params;
  const adviceData = advice as aviso;
  const userData = adviceData.usuario as usuario;

  const adviceHour = setAdviceHour(adviceData.tempoFinal);
  const adviceDate = setDueDate(adviceData.tempoFinal);

  return (
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Ver"
          titleStrong="Aviso"
        />
      </BackgroundNavigation>
      
      <ProfileDetails showsVerticalScrollIndicator={false}>
        {/* Alterar */}
        <BackgroundProfile source={BackgroundUser} resizeMode="cover"/>

        <Details 
          avatar={BackgroundUser}
          isPCD={userData.pcd}
          markedAdvice={true}
          name={userData.nome}
          email={userData.email}
        />

        <Divisor>
          <Buttons>
            <ProfileActionButton
              actionButton="delete"
              icon={<Ionicons name="ios-trash-outline" size={18} color="#F66363" />}
              placeholder="Apagar"
              onPress={() => {
                axios.get(`${BASE_URL}/avisos/remover/${adviceData.id}`).then((response) => {
                  const data = response.data as status;
                  showAlert(data.status, data.mensagem);
                  navigation.goBack();
                });
              }}
            />

            <ProfileActionButton
              icon={<MaterialIcons name="edit" size={18} color="black" />}
              placeholder="Editar Aviso"
              onPress={() => navigation.navigate("AdviceEditProfile", {advice : advice})}
            />

            <ProfileMenuButton
              onPress={() => {}}
            />
          </Buttons>
        </Divisor>

        <Divisor>
          <About>

            <ProfileAbout
              placeholder="Acontecimento:"
              answer={`${adviceData.descricao} - ${adviceData.local}`}
              icon={<FontAwesome name="exclamation" size={20} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Duração de:"
              answer={adviceData.duracao}
              icon={<Entypo name="time-slot" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Vence em:"
              answer={`${adviceDate[0]} de ${adviceDate[1]} de ${adviceDate[2]} às ${adviceHour}`}
              icon={<Entypo name="calendar" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Situação de passagem:"
              answer={"Transitável"}
              icon={<MaterialCommunityIcons name="wall" size={18} color="#797979" />}
            />

          </About>
        </Divisor>

      </ProfileDetails>
    </Container>
  )
}
export default AdviceProfile;
