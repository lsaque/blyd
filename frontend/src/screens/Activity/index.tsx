import React, { useRef } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import PageCard from '../../components/PageCard';

import Background from '../../assets/Activity/background.png'
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
import ActivityNotificationNumber from '../../components/ActivityNotificationNumber';
import ActivityCardAdvice from '../../components/ActivityCardAdvice';

export default function Activity({navigation}:any){

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
            title="Sua"
            titleStrong="Atividade"
          />
        <View style={{paddingTop: 35}}>
          <ActivityNotificationNumber
            numberAdvice="4"
            text="novos avisos."
          />
        </View>

        </Container>
      </BackgroundImage>

      <Modalize 
        ref={modalizeRef}
        alwaysOpen={470}
        snapPoint={470}
        HeaderComponent={
          <Title>Avisos 🌠</Title>
        }
      >
        <Content>
          <Wrapper>

            <ActivityCardAdvice
              name="Isaque"
              adviceName="Limpeza"
              adviceLocal="Corredor 2B"
              timeDuration="1h"
              picture={picture}
            />

            <ActivityCardAdvice
              name="Matheus"
              adviceName="Limpeza"
              adviceLocal="Corredor 3C"
              timeDuration="2h"
            />

            <ActivityCardAdvice
              name="Davi"
              adviceName="Limpeza"
              adviceLocal="Corredor 2B"
              timeDuration="8h"
              picture={picture}
            />

            <ActivityCardAdvice
              name="Luigi"
              adviceName="Manutenção"
              adviceLocal="Ala 2F"
              timeDuration="1d"
            />

          </Wrapper>
        </Content>
      </Modalize>

    </React.Fragment>
  )
}
