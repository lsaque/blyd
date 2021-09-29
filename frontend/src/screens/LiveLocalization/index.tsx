import React, { useRef, useState } from 'react';
import { BackgroundImage } from '../../../styles';
import { Modalize } from 'react-native-modalize';
import { Text } from 'react-native';

import Background from '../../assets/LiveLocalization/background.png'
import Navigation from '../../components/Navigation';
import PopUpDirection from '../../components/PopUpDirection';
import InformationTrip from '../../components/InformationTrip';
import Button from '../../components/Button';
import AdviceNotification from '../../components/AdviceNotification';

import {
  Container,
  Content,
  Row
} from './styles';

export default function LiveLocalization({navigation, route} : any){

  const modalizeRef = useRef<Modalize>(null);

  // const { comodo } = route.params; 

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
              backgroundColor="#F1EEEE" // onPress={() => { modalizeRef.current?.close()}}
            />
          </Row>
        }
      >
        <Content>
          <Row>
            <InformationTrip
              // destiny={comodo.nome || ""}
              destiny={"Sem rota"}
              onPress={() => navigation.navigate('MarkAdvice')}
            />
          </Row>

          <Row>
          {
            routeData?.avisos == null ? 
              <Text style={{textAlign:'center', fontSize:18}}>Nenhum aviso </Text> 
              : 
              routeData?.avisos.map((aviso: any) => (
                <AdviceNotification
                key={aviso}
                importance={1}
                // text={aviso.descricao}
                text="Limpeza - Corredor 2EP"
                /> 
              ))
          }
          </Row>
        </Content>
      </Modalize>
    </BackgroundImage>
  )
}
