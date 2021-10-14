import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Image, View, Text} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Localization/background.png'
import iconPage from '../../assets/Localization/iconPage.png'

import ParallaxHeader from '@fabfit/react-native-parallax-header';

import { 
  Container,
  ImagePage,
  Title,
  Strong,
  Content,
  Wrapper,
} from '../../assets/Styles/PageCardTemplate/styles';

import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { comodo, comodoCategorizado } from '../../types/comodo';
import { rota } from '../../types/rota';

export default function Localization({navigation}:any){

  const uriBackground = Image.resolveAssetSource(Background).uri;
  const [ comodoCategorizadoData, setComodoCategorizadoData ] = useState<comodoCategorizado[]>();
  const [ selectedComodo, setSelectedComodo ] = useState<comodo[]>();
  const [ showSelectedComodo, setShowSelectedComodo] = useState(true);
  
  useEffect(() => {
    axios.get(`${BASE_URL}/comodos/categorizados`).then((response) => {
      const data = response.data as comodoCategorizado[];
      setComodoCategorizadoData(data);
    })
  }, []);

  function handleNavigate(comodo: comodo) {
    axios.get(`${BASE_URL}/rota/2`).then((response) =>{
      const rota = response.data as rota;
      navigation.navigate('LiveLocalization', {comodo: comodo, rota: rota});
    });
  }

  return(
    <ParallaxHeader
      maxHeight={200}
      minHeight={80}
      renderOverlay={ () =>
        <View style={{ paddingHorizontal: 20 }}>
          <Navigation
            onPress={() => {
              if(showSelectedComodo != false){
                navigation.goBack('history')
              } else {
                setShowSelectedComodo(true)
              }
            }}
            title="Encontrar"
            titleStrong="Localização"
            lightContent={false}
          />
        </View>
      }
      heroImage={{ uri: uriBackground }}
    >
      <Container>
        <Content>
          <Title
            accessibilityHint="Título dizendo para informar o local, juntamente de um ícone do planeta"
          >Informe o <Strong>Local</Strong> 🌎</Title>
          <Wrapper accessibilityHint={"Neste quadrado branco é possível visualizar todas as categorias de locais disponíveis no aplicativo. São ordenados apenas 2 por linha"}>
            {showSelectedComodo ? 
              comodoCategorizadoData?.map(comodo => (
                <PageCard
                  key={comodo.id}
                  text={comodo.tipo}
                  backgroundColor={{ backgroundColor: '#D6FFE1' }}
                  onPress={() => {
                    setShowSelectedComodo(!showSelectedComodo);
                    setSelectedComodo(comodo.comodos);
                  }} 
                  accessibilityHint={"Clique para dizer que deseja ir para" + comodo.tipo} 
                />
              )) 
              : 
              selectedComodo?.map(comodo => (
                <PageCard 
                  key={comodo.id}
                  text={comodo.nome}
                  backgroundColor={{ backgroundColor: '#D6FFE1' }}
                  onPress={() => handleNavigate(comodo)} 
                  accessibilityHint={"Clique para dizer que deseja ir para" + comodo.nome} 
                />
              ))
            }
          </Wrapper>
        </Content>
      </Container>
    </ParallaxHeader>
  )
}
