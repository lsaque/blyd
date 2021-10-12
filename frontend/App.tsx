import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Modalize } from 'react-native-modalize';
import { NavigationContainer } from '@react-navigation/native';
import { Formik } from "formik";

import * as Yup from 'yup';
import AppIntroSlider from 'react-native-app-intro-slider';

import StateInput from './src/components/StateInput';
import Button from './src/components/Button';
import logo from './src/assets/Splash/logo.png';

import { 
  ErrorMessage, 
  Label, 
  SubmitButton, 
  TextInput 
} from './src/assets/Styles/PageCRUDTemplate/styles';

import { 
  BoxImage,
  Wrapper,
  Image,
  LogoBlyd,
  BackgroundImage,
  BoxContent,
  Title,
  Description,
  SplashButton,
  SignWrapper,
  Content,
  EnterButton,
  RegisterButton
} from './styles';

// import { UserScreen, AdminScreen } from './src';
import Navigation from './src/components/Navigation';
import Login from './src/screens/Login';
// import Main, { AdminScreen, UserScreen } from './src';
import Main from './src';

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

export default function App({ navigation }: any){
  const [showHome, setShowHome] = useState(false);

  function SplashScreen({item} : any){
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
        <NavigationContainer>
          <Main/>
        </NavigationContainer>
      </ThemeProvider>
    )
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
          renderDoneButton={ () => 
          <SplashButton 
            onPress={ () => setShowHome(true)}
          >Acessar</SplashButton> }
        />
      </React.Fragment>
    );
  }
}