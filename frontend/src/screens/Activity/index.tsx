import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import Navigation from '../../components/Navigation';

import Background from '../../assets/Activity/background.png'
import { 
  Container,
  Title,
  Content,
  Wrapper,
} from '../../assets/Styles/PageTemplate/styles';

import ActivityNotificationNumber from '../../components/ActivityNotificationNumber';
import ActivityCardAdvice from '../../components/ActivityCardAdvice';
import { activityCardAdvice } from '../../types/activityCardAdvice';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';

export default function Activity({navigation}:any){

  const modalizeRef = useRef<Modalize>(null);

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
      </Modalize>

    </React.Fragment>
  )
}
