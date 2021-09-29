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
        alwaysOpen={460}
        HeaderComponent={
          <Title>Informe o <Strong>Aviso</Strong> 🔮</Title>
        }
      >
        <Content>
          <Wrapper>
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
            <PageCard
              text="Limpeza"
              backgroundColor={{backgroundColor: '#DCD2FF'}}
              onPress={() => navigation.navigate('MarkAdvice')}
            />
            <PageCard
              text="Objeto"
              backgroundColor={{backgroundColor: '#DCD2FF'}}
              // onPress={}
            />
            <PageCard
              text="Obstrução"
              backgroundColor={{backgroundColor: '#DCD2FF'}}
              // onPress={}
            />
            <PageCard
              text="Ajuda"
              backgroundColor={{backgroundColor: '#DCD2FF'}}
              // onPress={}
            />
          </Wrapper>
        </Content>
      </Modalize>
    </React.Fragment>
  )
}
