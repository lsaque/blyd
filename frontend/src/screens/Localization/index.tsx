import React, { useRef, useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Localization/background.png'
import iconPage from '../../assets/Localization/iconPage.png'

import { 
  Container,
  ImagePage,
  Title,
  Strong,
  Content,
  Wrapper,
} from '../../assets/Styles/PageTemplate/styles';

import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { comodo, comodoCategorizado } from '../../types/comodo';
import { rota } from '../../types/rota';

export default function Localization({navigation}:any){

  const [ comodoCategorizadoData, setComodoCategorizadoData ] = useState<comodoCategorizado[]>();
  const [ selectedComodo, setSelectedComodo ] = useState<comodo[]>();

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

  const categoryModalizeRef = useRef<Modalize>(null);
  const itemModalize = useRef<Modalize>(null);

  const openModal = () => {
    itemModalize.current?.open();
  }

  return(
    <React.Fragment>
      <BackgroundImage source={Background} resizeMode="cover" >
        <Container>
          <Navigation
            onPress={() => navigation.goBack('history')}
            title="Encontrar"
            titleStrong="Localização"
          />

          <ImagePage>
            <Image source={iconPage}/>
          </ImagePage>

        </Container>
      </BackgroundImage>

      <Modalize 
        ref={categoryModalizeRef}
        adjustToContentHeight={false}
        alwaysOpen={450}
        HeaderComponent={
          <Title>Informe o <Strong>Local</Strong> 🌎</Title>
        }
      >
        <Content>
          <Wrapper>
            {comodoCategorizadoData?.map(comodo => (
              <PageCard
                key={comodo.id}
                text={comodo.tipo}
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                onPress={() => {
                  openModal()
                  setSelectedComodo(comodo.comodos)
                }}
              />
            ))}
          </Wrapper>
        </Content>
      </Modalize>

      <Modalize 
        ref={itemModalize}
        adjustToContentHeight={false}
        snapPoint={450}
        HeaderComponent={
          <Title>Informe o <Strong>Ambiente</Strong>🌎</Title>
        }
      >
        <Content>
          <Wrapper>

            {selectedComodo?.map(comodo => (
              <PageCard 
                key={comodo.id}
                text={comodo.nome} 
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                onPress={() => {handleNavigate(comodo)}}
              />
            ))}
          
          </Wrapper>
        </Content>
      </Modalize>
    </React.Fragment>
  )
}
