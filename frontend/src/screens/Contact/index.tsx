import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Image, View, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Contact/background.png'
import iconPage from '../../assets/Contact/iconPage.png'

import ParallaxHeader from '@fabfit/react-native-parallax-header';

import { 
  Container,
  ImagePage,
  Title,
  Strong,
  Content,
  Wrapper,
  Row
} from '../../assets/Styles/PageCardTemplate/styles';

export default function Localization({navigation}:any){

  const uriBackground = Image.resolveAssetSource(Background).uri;

  const contact = [
    {
      key: 1,
      badge: true,
      text: "Estação de trabalho", 
    },
    {
      key: 2,
      badge: false,
      text: "Pessoa", 
    },
    {
      key: 3,
      badge: false,
      text: "Setor", 
    },
    {
      key: 4,
      badge: false,
      text: "Andar", 
    },
    {
      key: 5,
      badge: false,
      text: "Recepção", 
    },
    {
      key: 6,
      badge: false,
      text: "Ajuda", 
    },
  ];

  return(
    <ParallaxHeader
      maxHeight={225}
      minHeight={80}
      renderOverlay={ () =>
        <View style={{ paddingHorizontal: 20 }}>
          <Navigation
            onPress={() => navigation.goBack('history')}
            title="Contactar"
            titleStrong="Alguém"
            lightContent={false}
          />
        </View>
      }
      heroImage={{ uri: uriBackground }}
    >
      <Container>
        <Content>
          <Title>Informe o <Strong>Contato</Strong> 👨‍🦯</Title>
          <Wrapper>
            {
              contact?.map(advice => (
                <PageCard
                  key={advice.key}
                  badge={advice.badge}
                  text={advice.text}
                  backgroundColor={{ backgroundColor: '#CFE9FF' }}
                  onPress={() => navigation.navigate('SearchContact')} 
                  accessibilityHint={"Clique para contactar " + advice.text}
                />
              ))
            }
          </Wrapper>
        </Content>
      </Container>
    </ParallaxHeader>
  )
}
