import React, { useRef } from 'react';
import { Dimensions, Image, View } from 'react-native';
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
  Row,
  SearchContactNavigation
} from '../../assets/Styles/PageTemplate/styles';
import ProfileCard from '../../components/ProfileCard';

import picture from '../../assets/SearchContact/picture.png';

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
              name="Isaque José de Souza"
              departmant="Secretaria"
              picture={picture}
              number="tel:11934762698"
            />

            <ProfileCard
              name="Davi Quintal"
              departmant="Secretaria"
            />

            <ProfileCard
              name="Davi Quintal"
              departmant="Secretaria"
            />

            <ProfileCard
              name="Davi Quintal"
              departmant="Secretaria"
            />

            <ProfileCard
              name="Davi Quintal"
              departmant="Secretaria"
            />

          </Wrapper>
        </Content>
      </Modalize>

    </React.Fragment>
  )
}
