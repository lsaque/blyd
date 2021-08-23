import React, { useRef } from 'react';
import { Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Advice/background.png'
import iconPage from '../../assets/Advice/iconPage.png'

import { 
  Container,
  ImagePage,
  Title,
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
            title="Marcar"
            titleStrong="Aviso"
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
      >
        <Title>Informe o tipo de aviso 🔮</Title>
        <Content>
          <Wrapper>
            <Row>
              <PageCard
                badge={true}
                text="Estação de trabalho"
                backgroundColor={{backgroundColor: '#DCD2FF'}}
                // onPress={}
              />
              <PageCard
                text="Manutenção"
                backgroundColor={{backgroundColor: '#DCD2FF'}}
                // onPress={}
              />
            </Row>
            <Row>
              <PageCard
                text="Limpeza"
                backgroundColor={{backgroundColor: '#DCD2FF'}}
                // onPress={}
              />
              <PageCard
                text="Objeto"
                backgroundColor={{backgroundColor: '#DCD2FF'}}
                // onPress={}
              />
            </Row>
          </Wrapper>
        </Content>
      </Modalize>
    </React.Fragment>
  )
}
