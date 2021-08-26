import React, { useRef } from 'react';
import { BackgroundImage } from '../../../styles';
import { Modalize } from 'react-native-modalize';

import Background from '../../assets/LiveLocalization/background.png'
import Navigation from '../../components/Navigation';
import PopUpDirection from '../../components/PopUpDirection';
import InformationTrip from '../../components/InformationTrip';
import Button from '../../components/Button';
import AdviceNotification from '../../components/AdviceNotification';

import {
  Container,
  Content,
  Title,
  Strong,
  Row
} from './styles';

export default function LiveLocalization({navigation} : any){

  const modalizeRef = useRef<Modalize>(null);

  return(
    <BackgroundImage source={Background} resizeMode="cover">
      <Container>
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Localização"
          titleStrong="Atual"
        />

        <PopUpDirection
          arrowDirection="long-arrow-up"
        />

      </Container>
      <Modalize 
        ref={modalizeRef}
        // modalHeight={415}
        adjustToContentHeight={false}
        alwaysOpen={100}
        modalHeight={360}
        // HeaderComponent={
        //   <Title>Detalhes do <Strong>Trajeto</Strong> 🏆</Title>
        // }
        FooterComponent={
          <Row>
            <Button
              filled
              text="Cancelar"
              backgroundColor="#F1EEEE"
              // onPress={() => { modalizeRef.current?.close()}}
            />
          </Row>
        }
      >
        <Content>
          <Row>
            <InformationTrip
              destiny="Escritório - 2B"
              // onPress={}
            />
          </Row>

          <Row>
            <AdviceNotification
              importance={1}
            />
            {/* <AdviceNotification/> */}
          </Row>
        </Content>
      </Modalize>
    </BackgroundImage>
  )
}
