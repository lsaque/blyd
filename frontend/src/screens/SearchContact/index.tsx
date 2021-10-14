import React, { useRef } from 'react';
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

export default function SearchContact({navigation}:any){

  const uriBackground = Image.resolveAssetSource(Background).uri;
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
            <ProfileCard
              name="Davi Quintal"
              department="T.I"
            />

            <ProfileCard
              name="Laura Silva dos santos souza nunes pereira ximenes"
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
