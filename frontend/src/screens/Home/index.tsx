import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
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
import ApiContext from "../../contexts/ApiContext";

function Home({navigation} : any){

  const { state } = useContext(ApiContext);

  return (
    <React.Fragment>
      <StatusBar
        style='light'
        translucent={false}
        // animated={true}
      />

      <Container>
        <HomeImage source={Background} resizeMode="contain">
          <Top>
            {/* <ButtonInformation>
              <Ionicons name="information" size={24} color="white" />
            </ButtonInformation> */}
          </Top>

          <Bot>
            <WelcomeText accessibilityHint={"Bem-vindo " + state.usuarioLogin?.nome.split(" ")[0]}>Bem-vindo, {"\n"}{state.usuarioLogin?.nome.split(" ")[0]}!</WelcomeText>

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
          <PageTitle
            accessibilityHint="Veja abaixo todas as principais funções do aplicativo"
          >
            Funções disponíveis
          </PageTitle>

          <HomeCard
            text="Ir a um local específico."
            onPress={() => navigation.navigate('Localization', {})}
            iconName="map-marker"
            backgroundColor={{backgroundColor: '#D6FFE1'}}
          />

          <HomeCard
            text="Contactar alguém."
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