import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Modalize } from 'react-native-modalize';
import AppIntroSlider from 'react-native-app-intro-slider';

import logo from './src/assets/Splash/logo.png';
import StateInput from './src/components/StateInput';
import Button from './src/components/Button';

import { UserScreen, AdminScreen } from './src';

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
import { NavigationContainer } from '@react-navigation/native';

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
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const [showHome, setShowHome] = useState(true);

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
          {/* <UserScreen/> */}
          <AdminScreen/>
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
          renderNextButton={ () => (
            <SplashButton>Próximo</SplashButton>
            // <Button 
            //   filled 
            //   text="Próximo"
            // />
          )}
          
          renderDoneButton={ () => (
            <SplashButton onPress={onOpen}>Acessar</SplashButton>
          )}
        />

        <Modalize
          ref={modalizeRef}
          snapPoint={500}
          keyboardAvoidingBehavior={'padding'}
          avoidKeyboardLikeIOS={true}
        >
          <SignWrapper>
            <BoxContent>
              <Title>Entrar no Blyd</Title>
              <Description>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </Description>
            </BoxContent>

            <Content>
              <StateInput
                placeholder="E-mail ou nome de usuário"
              />
              <StateInput
                placeholder="Senha"
                password={true}
              />
              <EnterButton
                text="Entrar"
                onPress={ () => {
                  setShowHome(true);
                  // alert('E-mail errado');
                }}
              />
              <RegisterButton
                text="Solicitar Registro"
              />
            </Content>
          </SignWrapper>
        </Modalize>
      </React.Fragment>
    );
  }
}