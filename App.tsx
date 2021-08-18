import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';

import logo from './src/assets/Splash/logo.png';
import Main from './src';

import { 
  BoxImage,
  Wrapper,
  Image,
  LogoBlyd,
  BackgroundImage,
  BoxContent,
  Title,
  Description,
  SplashButton
} from './styles';
import { StatusBar } from 'expo-status-bar';

const slides = [
  {
    key: '1',
    title: "Bem-vindo",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ",
    bgImage: require('./src/assets/Splash/background1.png'),
    image: require('./src/assets/Splash/splash.png'),
  },
  {
    key: '2',
    title: "Bem-vindo",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ",
    bgImage: require('./src/assets/Splash/background2.png/'),
    image: require('./src/assets/Splash/splash.png'),

  },
  {
    key: '3',
    title: "Bem-vindo",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ",
    bgImage: require('./src/assets/Splash/background3.png'),
    image: require('./src/assets/Splash/splash.png'),
  },
];

const colors = {
  primary: '#8749FC',
  white: '#FFFFFF',
  black: '#000000',
  text: '#939BA6'
}

export default function App(){
  const [showHome, setShowHome] = useState(false);

  function SplashScreen({item} : { item: any }){
    return(
      <BackgroundImage source={item.bgImage} resizeMode="cover">
        <Wrapper>
          <BoxImage>
            <LogoBlyd source={logo} resizeMode="contain"/>
            <Image resizeMode="contain" source={item.image} />
          </BoxImage>
          <BoxContent>
            <Title>{item.title}</Title>
            <Description>{item.text}</Description>
          </BoxContent>
        </Wrapper>
      </BackgroundImage>
    );
  }

  if(showHome) {
    return (
      <ThemeProvider theme={colors}>
        <Main/>
      </ThemeProvider>
    );
  } else {
    return (
      <React.Fragment>
        <StatusBar style="light"/>
        <AppIntroSlider
          renderItem={SplashScreen}
          data={slides}
          showPrevButton={true}
          showNextButton={true}
          activeDotStyle={{
            backgroundColor: colors.primary,
            width: 30
          }}
          renderNextButton={ () => <SplashButton>Próximo</SplashButton> }
          renderDoneButton={ () => <SplashButton>Acessar</SplashButton> }
          onDone={() => setShowHome(true)}
          />
        </React.Fragment>
    );
  }
}