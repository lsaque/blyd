import React, { useRef } from 'react';
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
  Row
} from '../../assets/Styles/PageTemplate/styles';

export default function Localization({navigation}:any){

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
            <Row>
              <PageCard
                badge={true}
                text="Estação de trabalho"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
              />
              <PageCard
                text="Escritório"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                onPress={openModal}
              />
            </Row>
            <Row>
              <PageCard
                text="Banheiro"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
              <PageCard
                text="Setor"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
            </Row>
            <Row>
              <PageCard
                text="Refeitório"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
              <PageCard
                text="Sala de Reunião"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
            </Row>
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
            <Row>
              <PageCard
                text="Escritório Andressa"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
              <PageCard
                text="Escritório 2B"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                onPress={() => navigation.navigate('LiveLocalization')}
              />
            </Row>
            <Row>
              <PageCard
                text="Escritório Reunião"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
              <PageCard
                text="Escritório Wanessa"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
              />
            </Row>
          </Wrapper>
        </Content>
      </Modalize>

      
    </React.Fragment>
  )
}
