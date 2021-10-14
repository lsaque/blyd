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
  arrowType: string;
  text: string;
  distance: string;
}

export default function LiveLocalization({navigation, route} : any){

  const modalizeRef = useRef<Modalize>(null);

  const [ selectedComodo, setSelectedComodo ] = useState<comodo>();
  const [ routeData, setRouteData ] = useState<rota>();
  const [ index, setIndex ] = useState<number>(-1);
  // const [ isRouted, setIsRouted] = useState(false);
  const [ popUpData, setPopUpData ] = useState<myPopUpData>({
    arrowDirection: "",
    arrowType: "map-clock",
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
      // setIsRouted(!isRouted)
      setPopUpData({
        arrowDirection: routeData.popUps[index].arrowDirection,
        arrowType: routeData.popUps[index].arrowType,
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
        alwaysOpen={380}
        modalHeight={380}
        FooterComponent={
          <Row>
            <Button
              filled
              text="Concluir viagem"
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
              isRouteSetted={routeData != undefined ? true : false}
              onPress={() => {
                if(routeData == undefined){
                  navigation.navigate('Localization')
                } else {
                  navigation.navigate('Advice')
                }
              }}
            />
          </Row>

          <Row>
          {
            routeData?.avisos == null ?
              <Text style={{textAlign:'center', fontSize:18}}>Nenhum aviso </Text> 
              : 
              routeData?.avisos.map((aviso: any) => (
                <AdviceNotification
                  onPress={() => navigation.navigate("AdviceProfile", {})}
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
