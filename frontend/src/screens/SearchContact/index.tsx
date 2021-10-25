import React, { useRef, useState, useContext } from 'react';
import { Dimensions, Image, View, Text} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import ProfileCard from '../../components/ProfileCard';

import picture from '../../assets/SearchContact/picture.png';
import Background from '../../assets/Contact/background.png'

import ParallaxHeader from '@fabfit/react-native-parallax-header';

import { 
  Container,
  Title,
  Strong,
  Content,
  Wrapper,
  SearchContactNavigation,
} from '../../assets/Styles/PageCardTemplate/styles';
import { apiData } from '../../types/apiData';
import ApiContext from '../../contexts/ApiContext';

export default function SearchContact({navigation}:any){

  const uriBackground = Image.resolveAssetSource(Background).uri;
  const [ apiData, setApiData ] = useState<apiData>(useContext(ApiContext).state);
  const modalizeRef = useRef<Modalize>(null);
  
  return(
    <React.Fragment>
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
          <View style={{marginTop: 25}}>
            <SearchContactNavigation
              text="Pesquise pelo nome"
              onPress={() => navigation.goBack('history')}
            />
          </View>
        </View>
      }
      heroImage={{ uri: uriBackground }}
    >
      <Container>
        <Content>
          {/* <Title>Informe o <Strong>Contato</Strong> 👨‍🦯</Title> */}
          <Wrapper>
            {
              apiData.usuarios.map(usuario => (
                <ProfileCard
                  key={usuario.id}
                  name={usuario.nome}
                  department={usuario.setor.nome}
                  picture={picture}
                  number={usuario.celular}
              />
              ))
            }
          </Wrapper>
        </Content>
      </Container>
    </ParallaxHeader>


      {/* <BackgroundImage source={Background} resizeMode="cover" style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
      }}>
        <Container>
          <Navigation
            onPress={() => navigation.goBack('history')}
            title="Contactar"
            titleStrong="Alguém"
          />
          <View style={{paddingTop: 35}}>
            <SearchContactNavigation
              text="Pesquise pelo nome"
              onPress={() => navigation.goBack('history')}
            />
          </View>
        </Container>
      </BackgroundImage>

      <Modalize 
        ref={modalizeRef}
        alwaysOpen={500}
        snapPoint={500}
        modalHeight={500}
        adjustToContentHeight={false}
        // modalHeight={550}
        // keyboardAvoidingBehavior={'height'}
        avoidKeyboardLikeIOS={false}
        // keyboardAvoidingOffset={}
        HeaderComponent={
          <Title>Pessoas encontradas 👨‍🦯</Title>
        }
      >
        <Content>
          <Wrapper>
            
            <ProfileCard
              name="Davi Quintal"
              department="T.I"
            />

            <ProfileCard
              name="Laura Silva"
              department="Secretaria"
              picture={picture}
              number="1191342789"
            />

            <ProfileCard
              name="Isaque Souza"
              department="RH"
            />

            <ProfileCard
              name="Leandro Lord"
              department="Administração"
            />

            <ProfileCard
              name="Caroline A. Lu."
              department="Ambulatório"
            />

          </Wrapper>
        </Content>
      </Modalize> */}

    </React.Fragment>
  )
}
