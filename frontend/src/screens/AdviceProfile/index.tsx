import React from "react";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import Navigation from "../../components/Navigation";
import Details from "../../components/Details";
import ProfileActionButton from "../../components/ProfileActionButton";
import ProfileMenuButton from "../../components/ProfileMenuButton";
import ProfileAbout from "../../components/ProfileAbout";

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

interface IAdviceProfileProps{}

const AdviceProfile: React.FC<IAdviceProfileProps> = ({ navigation }: any) => {
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
        <BackgroundProfile source={Background} resizeMode="cover"/>

        <Details 
          avatar={Background}
          isPCD={false}
          markedAdvice={true}
          name="Isaque José de Souza"
          email="isaque@gmail.com"
        />

        <Divisor>
          <Buttons>
            <ProfileActionButton
              actionButton="delete"
              icon={<Ionicons name="ios-trash-outline" size={18} color="#F66363" />}
              placeholder="Apagar"
              onPress={() => {}}
            />

            <ProfileActionButton
              icon={<MaterialIcons name="edit" size={18} color="black" />}
              placeholder="Editar Aviso"
              onPress={() => navigation.navigate("AdviceEditProfile", {})}
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
              answer={"Limpeza no corredor 3AC"}
              icon={<FontAwesome name="exclamation" size={20} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Duração de:"
              answer={"3 horas"}
              icon={<Entypo name="time-slot" size={18} color="#797979" />}
            />

            <ProfileAbout
              placeholder="Vence em:"
              answer={"{25}" + " de " + "{Setembro}" + " às " + "{23}" + ":" + "{59}"}
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
