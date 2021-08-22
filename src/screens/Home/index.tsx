import { StatusBar } from "expo-status-bar";
import React from "react";
import { Animated, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons  } from '@expo/vector-icons';

import { 
  Container, 
  HomeImage, 
  WelcomeText, 
  Content,
  PageTitle,
  Top, 
  Bot
 } from "./styles";

import Background from '../../assets/Home/background.png';
import FilledButton from "../../components/FilledButton";
import StateInput from "../../components/StateInput";
import IconButtonText from "../../components/IconButtonText";
import NewsCard from "../../components/NewsCard";

import NewsImage from '../../assets/Home/newsImage.png';
import PageCard from "../../components/PageCard";



function Home({navigation} : any){
  return (
    <React.Fragment>
      <StatusBar
        style='light'
        translucent={false}
        // backgroundColor="#cabdfc"
        animated={true}
      />

      <Container>
        <HomeImage source={Background} resizeMode="contain">
          <Top>
            {/* <ButtonInformation>
              <Ionicons name="information" size={24} color="white" />
            </ButtonInformation> */}
          </Top>

          <Bot>
            <WelcomeText>Bem-vindo, {"\n"}Isaque!</WelcomeText>
            <IconButtonText
              text="Deseja ir para onde?"
              icon={<Ionicons name="mic" size={22} color="#4A4A4A" />}
            />
            <NewsCard
              image={NewsImage}
              text="Conheça os novos locais da empresa!"
              onPress={() => navigation.navigate('Search')}
            />
          </Bot>
        </HomeImage>

        <Content>
          <PageTitle>Funções disponíveis</PageTitle>
          <PageCard
            text="Ir a um local específico"
            onPress={() => navigation.navigate('Localization')}
            iconName="map-marker"
            backgroundColor={{backgroundColor: '#D6FFE1'}}
          />
          <PageCard
            text="Contactar alguém ou um setor"
            onPress={() => navigation.navigate('Contact')}
            iconName="phone"
            backgroundColor={{backgroundColor: '#CFE9FF'}}
          />
          <PageCard
            text="Marcar ou agendar aviso temporário"
            onPress={() => navigation.navigate('Advice')}
            iconName="pin"
            backgroundColor={{backgroundColor: '#DCD2FF'}}
          />
        </Content>
        
      </Container>
    </React.Fragment>
  )
}
export default Home;
function setState(arg0: { dark: boolean; }) {
  throw new Error("Function not implemented.");
}

