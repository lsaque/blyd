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

  const modalizeRef = useRef<Modalize>(null);

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
        ref={modalizeRef}
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
                // onPress={}
              />
              <PageCard
                text="Escritório"
                backgroundColor={{backgroundColor: '#D6FFE1'}}
                // onPress={}
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
    </React.Fragment>
  )
}
