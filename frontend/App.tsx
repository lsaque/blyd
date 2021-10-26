import 'react-native-gesture-handler';
import React, { useRef, useState, useEffect, useContext } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Modalize } from 'react-native-modalize';
import { NavigationContainer } from '@react-navigation/native';
import { Formik } from "formik";
import Preload from "./src/screens/Preload";

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
import ApiContext, { ApiProvider } from './src/contexts/ApiContext';
import { getApiData } from './src/data/GetDataApi';
import { Component } from 'hoist-non-react-statics/node_modules/@types/react';

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
  const [showHome, setShowHome] = useState(true);

  const { state, setState } = useContext(ApiContext);

  const [ isLoaded, setIsLoaded ] = useState<boolean>(false);

  useEffect(() => {
    getApiData(state).then(data => {
      setState(data)
      setIsLoaded(true);
    });
  },[]);

  function SplashScreen({ item } : any){
    return(
      <BackgroundImage source={item.bgImage} resizeMode="cover">
        <Wrapper>
          <BoxImage>
            <LogoBlyd source={logo} resizeMode="contain"/>
            <Image resizeMode="contain" source={item.image} />
          </BoxImage>
          <BoxContent 
            accessible={true}
            importantForAccessibility="yes"
          >
            <Title>{item.title}</Title>
            <Description>{item.text}</Description>
          </BoxContent>
        </Wrapper>
      </BackgroundImage>
    );
  }

  if(!isLoaded) {
    return <Preload />
  } else {
    if(showHome) {
      return (
        <ApiProvider>
          <ThemeProvider theme={colors}>
              <NavigationContainer>
                <Main />
              </NavigationContainer>
          </ThemeProvider>
        </ ApiProvider>
      )
    } else {
      return (
        <>
          <StatusBar style="light"/>
          
          <AppIntroSlider
            renderItem={SplashScreen}
            data={slides}
            showPrevButton={false}
            showNextButton={true}
            accessible={false}
            dotClickEnabled={false}
            activeDotStyle={{
              backgroundColor: colors.primary,
              width: 30
            }}
            renderNextButton={ () => <SplashButton>Próximo</SplashButton> }
            renderDoneButton={ () => 
              <SplashButton 
                onPress={ () => setShowHome(true)}
              >Acessar</SplashButton> 
            }
          />
        </>
      );
    }
  }

}