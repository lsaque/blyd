import React, { useRef, useState, useEffect } from 'react';
import { Image, FlatList, LogBox } from 'react-native';
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

export default function Localization({navigation}:any){

  const [ comodoCategorizadoData, setComodoCategorizadoData ] = useState<comodoCategorizado[]>();
  const [ selectedComodo, setSelectedComodo ] = useState<comodo[]>();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    axios.get(`${BASE_URL}/comodos/categorizados`).then((response) => {
      const data = response.data as comodoCategorizado[];
      setComodoCategorizadoData(data);
    })
  }, []);

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
            <FlatList 
              data={comodoCategorizadoData}
              numColumns={2}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <PageCard
                key={item.id}
                text={item.tipo} 
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                onPress={() => {
                  openModal()
                  setSelectedComodo(item.comodos)
                }}
              />)}
            />
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
            <FlatList 
                data={selectedComodo}
                numColumns={2}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <PageCard 
                  key={item.id}
                  text={item.nome} 
                  backgroundColor={{backgroundColor: '#D6FFE1'}}
                />)}
              />
          </Wrapper>
        </Content>
      </Modalize>
    </React.Fragment>
  )
}
