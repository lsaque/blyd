import React, { useRef } from 'react';
import { Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Contact/background.png'
import iconPage from '../../assets/Contact/iconPage.png'

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
            title="Contactar"
            titleStrong="Alguém"
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
          <Title>Informe o <Strong>Contato</Strong> 👨‍🦯</Title>
        }
      >
        <Content>
          <Wrapper>
            <PageCard
              badge={true}
              text="Estação de trabalho"
              backgroundColor={{backgroundColor: '#CFE9FF'}}
              // onPress={}
            />
            <PageCard
              text="Pessoa"
              backgroundColor={{backgroundColor: '#CFE9FF'}}
              // onPress={}
            />
            <PageCard
              text="Setor"
              backgroundColor={{backgroundColor: '#CFE9FF'}}
              // onPress={}
            />
            <PageCard
              text="Andar"
              backgroundColor={{backgroundColor: '#CFE9FF'}}
              // onPress={}
            />
            <PageCard
              text="RH"
              backgroundColor={{backgroundColor: '#CFE9FF'}}
              // onPress={}
            />
            <PageCard
              text="Ajuda"
              backgroundColor={{backgroundColor: '#CFE9FF'}}
              // onPress={}
            />
          </Wrapper>
        </Content>
      </Modalize>
    </React.Fragment>
  )
}
