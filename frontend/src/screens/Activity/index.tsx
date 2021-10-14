import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Image, View, Text} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';
import ActivityCardAdvice from '../../components/ActivityCardAdvice';

import Background from '../../assets/Activity/background.png'

import ParallaxHeader from '@fabfit/react-native-parallax-header';

import { 
  Container,
  ImagePage,
  Title,
  Strong,
  Content,
  Wrapper,
} from '../../assets/Styles/PageCardTemplate/styles';

import ActivityNotificationNumber from '../../components/ActivityNotificationNumber';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { activityCardAdvice } from '../../types/activityCardAdvice';

export default function Activity({navigation}:any){

  const modalizeRef = useRef<Modalize>(null);

  const uriBackground = Image.resolveAssetSource(Background).uri;
  const [ activityCardAdviceData, setActivityCardAdviceData ] = useState<activityCardAdvice[]>();

  useEffect(() => {
    axios.get(`${BASE_URL}/activity-card-advice`).then((response) => {
      const data = response.data as activityCardAdvice[];
      setActivityCardAdviceData(data);
    });
  },[]);

  // function handleTimeDuration(activityCard: activityCardAdvice){
  //   console.log(activityCard.timeDuration);
  //   return "1h";
  // }
  
  return(
    <React.Fragment>
      <ParallaxHeader
      maxHeight={200}
      minHeight={80}
      renderOverlay={ () =>
        <View style={{ paddingHorizontal: 20 }}>
          <Navigation
            onPress={() => navigation.goBack('history')}
            title="Sua"
            titleStrong="Atividade"
            lightContent={false}
          />
        </View>
      }
      heroImage={{ uri: uriBackground }}
    >
      <Container>
        <Content>
          <Title
            accessibilityHint="Título dizendo para informar o local, juntamente de um ícone do planeta"
          >Informe o <Strong>Local</Strong> 🌎</Title>
          <Wrapper accessibilityHint={"Neste quadrado branco é possível visualizar todas as categorias de locais disponíveis no aplicativo. São ordenados apenas 2 por linha"}>
          {
              activityCardAdviceData?.map((data) => (
                <ActivityCardAdvice
                  key={data.id}
                  name={data.name}
                  adviceName={data.adviceName}
                  adviceLocal={data.adviceLocal}
                  timeDuration="1h"
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
            title="Sua"
            titleStrong="Atividade"
          />
        <View style={{paddingTop: 35}}>
          <ActivityNotificationNumber
            numberAdvice={activityCardAdviceData?.length || 0}
            text="novo(s) avisos."
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

            {
              activityCardAdviceData?.map((data) => (
                <ActivityCardAdvice
                  key={data.id}
                  name={data.name}
                  adviceName={data.adviceName}
                  adviceLocal={data.adviceLocal}
                  timeDuration="1h"
                />
              ))
            }

          </Wrapper>
        </Content>
      </Modalize> */}

    </React.Fragment>
  )
}
