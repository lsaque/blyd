import React, { useRef, useState, useEffect } from 'react';
import { Text } from 'react-native'
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
  Row
} from './styles';

import { comodo } from '../../types/comodo';
import { rota } from '../../types/rota';

export type myPopUpData = {
  arrowDirection: string;
  arrowType: any;
  text: string;
  distance: string;
}

export default function LiveLocalization({navigation, route} : any){

  const modalizeRef = useRef<Modalize>(null);

  const [ selectedComodo, setSelectedComodo ] = useState<comodo>();
  const [ routeData, setRouteData] = useState<rota>();
  const [ index, setIndex ] = useState<number>(-1);
  const [ popUpData, setPopUpData ] = useState<myPopUpData>({
    arrowDirection: "",
    arrowType: "map-check",
    text: "Selecione uma rota para",
    distance: " começar"
  });

  useEffect(() =>{
    try {
      const {comodo, rota} = route.params;
      
      setSelectedComodo(comodo);
      setRouteData(rota);
      setIndex(0);
    } catch(e) {}
  },[route.params]);

  useEffect(() =>{
    if(routeData != undefined){
      setPopUpData({
        arrowDirection: routeData.popUps[index].arrowDirection,
        arrowType: "",
        text: routeData.popUps[index].text,
        distance: ` ${routeData.popUps[index].distance}`
      });

      const timer = setTimeout(() => setIndex(index + 1),6000);

      if(index == routeData.popUps.length - 1) clearTimeout(timer);
    }
  },[index]);

  return(
    <BackgroundImage source={Background} resizeMode="cover">
      <Container>
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Localização"
          titleStrong="Atual"
        />
        
        <PopUpDirection
          arrowDirection={popUpData.arrowDirection}
          arrowType={popUpData.arrowType}
          text={popUpData.text}
          distance={popUpData.distance}
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
              destiny={selectedComodo?.nome || "Sem rota"}
              onPress={() => navigation.navigate('MarkAdvice')}
            />
          </Row>

          <Row>
          {
            routeData?.avisos == null ? 
              <Text>Nenhum aviso </Text> 
              : 
              routeData?.avisos.map((aviso) => (
                <AdviceNotification
                key={aviso}
                importance={1}
                text={aviso.descricao}
                /> 
              ))
          }
          </Row>
        </Content>
      </Modalize>
    </BackgroundImage>
  )
}
