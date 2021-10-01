import React, { useRef } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import ProfileCard from '../../components/ProfileCard';
import picture from '../../assets/SearchContact/picture.png';
import Background from '../../assets/Contact/background.png'

import { 
  Container,
  Title,
  Content,
  Wrapper,
  SearchContactNavigation
} from '../../assets/Styles/PageTemplate/styles';

export default function SearchContact({navigation}:any){

  const modalizeRef = useRef<Modalize>(null);
  
  return(
    <React.Fragment>
      <BackgroundImage source={Background} resizeMode="cover" style={{
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
      </Modalize>

    </React.Fragment>
  )
}
