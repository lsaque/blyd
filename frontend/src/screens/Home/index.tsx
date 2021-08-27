import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

import Background from '../../assets/Home/background.png';
import NewsImage from '../../assets/Home/newsImage.png';

import IconButtonText from "../../components/IconButtonText";
import NewsCard from "../../components/NewsCard";
import HomeCard from "../../components/HomeCard";

import { 
  Container, 
  HomeImage, 
  WelcomeText, 
  Content,
  PageTitle,
  Top,
  Bot
 } from "./styles";

function Home({navigation} : any){
  return (
    <React.Fragment>
      <StatusBar
        style='light'
        translucent={false}
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
              onPress={() => navigation.navigate('Search')}
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

          <HomeCard
            text="Ir a um local específico."
            onPress={() => navigation.navigate('Localization')}
            iconName="map-marker"
            backgroundColor={{backgroundColor: '#D6FFE1'}}
          />

          <HomeCard
            text="Contactar alguém ou um setor."
            onPress={() => navigation.navigate('Contact')}
            iconName="phone"
            backgroundColor={{backgroundColor: '#CFE9FF'}}
          />

          <HomeCard
            text="Marcar ou agendar aviso temporário."
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