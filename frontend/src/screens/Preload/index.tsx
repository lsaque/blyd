import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import LoadingLogo from '../../assets/Preload/loading_logo.svg';

const Preload: React.FC = () => {
  // const navigation = useNavigation();

  // useEffect(()=>{
  //   const checkToken = async () => {
  //     const token = await AsyncStorage.getItem('token');
  //     if(token !== null){
  //       // Validar o token
  //     } else {
  //       navigation.navigate('SignIn');
  //     }
  //   }
  //   checkToken();
  // }, [navigation]);


  return (
    <Container>
      <LoadingLogo width="100%" height="300"/>
      <LoadingIcon size="large" color="#0B0421" />
    </Container>
  );
}

export default Preload;