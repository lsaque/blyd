import React from "react";
import { Linking } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Navigation from "../../components/Navigation";
import Details from "../../components/Details";
import ProfileActionButton from "../../components/ProfileActionButton";
import ProfileMenuButton from "../../components/ProfileMenuButton";
import ProfileAbout from "../../components/ProfileAbout";
import AdminTitle from "../../components/AdminTitle";
import AdminLastAdvice from "../../components/AdminLastAdvice";

// import Background from "../../assets/UserList/background.png";
import Background from "../../assets/Admin/background.png";

import { 
  Container,
  BackgroundNavigation,
  BackgroundProfile,
  ProfileDetails,
  Buttons,
  About,
  Divisor,
} from "./styles";
import MessageNoContent from "../../components/MessageNoContent";
import { usuario } from "../../types/usuario";
import { setAdviceHour, setDueDate } from "../../utils/commons/generateDate";

interface IUserProfileProps{}

const UserProfile: React.FC<IUserProfileProps> = ({ navigation, route }: any) => {

  const { user } = route.params;
  const userData = user as usuario;

  return (
    <Container>
      <BackgroundNavigation>
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Perfil:"
          titleStrong={userData.nome.split(" ")[0]}
        />
      </BackgroundNavigation>
      
      <ProfileDetails showsVerticalScrollIndicator={false}>
        <BackgroundProfile source={Background} resizeMode="cover"/>

        <Details 
          avatar={Background}
          isPCD={true}
          name={userData.nome}
          email={userData.email}
        />

        <Divisor>
          <Buttons>
            <ProfileActionButton
              actionButton="action"
              icon={<Ionicons name="md-call" size={18} color="#8363F6" />}
              placeholder="Chamar"
              onPress={() => {
                Linking.openURL("tel:" + "1191342789")
              }}
            />

            <ProfileActionButton
              icon={<MaterialIcons name="edit" size={18} color="black" />}
              placeholder="Editar Perfil"
              onPress={() => navigation.navigate("UserEditProfile", {userData : userData})}
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
              answer={userData.setor.nome}
              icon={<MaterialIcons name="edit" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Chamadas realizadas:"
              answer={userData.totalChamadas}
              icon={<MaterialCommunityIcons name="phone" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Avisos marcados:"
              answer={userData.totalAvisos}
              icon={<MaterialCommunityIcons name="pin" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Rotas traçadas:"
              answer={userData.totalRotas}
              icon={<MaterialCommunityIcons name="map-marker" size={18} color="#797979" />}
            />
          </About>
        </Divisor>

        <Divisor>
          <AdminTitle
            text="Últimos Avisos:"
            seeAll={true}
          />

          {
            userData.avisos.length == 0 ?
              <MessageNoContent
                type="advice"
                text="Ainda não possui nenhum aviso atribuído"
              />
              :
              userData.avisos.map(advice => {
    
                const dueDate = setDueDate(advice.tempoFinal);
    
                return(
                  <AdminLastAdvice
                    key={advice.id}
                    userPicture={Background}
                    userName={userData.nome}
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
            userName="Isaque Souza"
            adviceHour="14:43"
            adviceName="Limpeza - corredor 2B"
            adviceTimeRemaining="2h"
            isImpassable={true}
            dueDay="04"
            dueMonth="Outubro"
            dueYear="2021"
            dueHour="14"
            dueMinute="20" onPress={() => {}}
          /> */}
        </Divisor>

      </ProfileDetails>
    </Container>
  )
}
export default UserProfile;
