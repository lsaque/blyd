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
import { popUpDirection } from '../../types/popUpDirection';
import { aviso } from '../../types/aviso';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { setNewAdviceList } from '../../utils/commons/generateNewAdviceList';

export type myPopUpData = {
  arrowDirection: string;
  arrowType: string;
  text: string;
  distance: string;
}

export default function LiveLocalization({navigation, route} : any){

  const modalizeRef = useRef<Modalize>(null);

  const [ selectedComodo, setSelectedComodo ] = useState<comodo>();
  const [ routeData, setRouteData ] = useState<popUpDirection[]>();
  const [ avisoData, setAvisoData ] = useState<aviso[]>();
  const [ index, setIndex ] = useState<number>(-1);
  const [ popUpData, setPopUpData ] = useState<myPopUpData>({
    arrowDirection: "",
    arrowType: "add-location-alt",
    text: "Selecione uma rota para",
    distance: " começar"
  });

  useEffect(() =>{
    axios.get(`${BASE_URL}/avisos`).then((response) =>{
      const oldData = response.data as aviso[];
      setAvisoData(setNewAdviceList(oldData));
    });

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
        arrowDirection: routeData[index].arrowDirection,
        arrowType: routeData[index].arrowType,
        text: routeData[index].text,
        distance: ` ${routeData[index].distance}`
      });

      const timer = setTimeout(() => setIndex(index + 1),6000);

      if(index == routeData.length - 1) clearTimeout(timer);

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
            avisoData == null ?
              <Text 
                style={{
                  textAlign:'center', 
                  fontSize:18
                }}
                accessibilityHint="Nenhum aviso marcado neste trajeto"
              >Nenhum aviso </Text> 
              : 
              avisoData.map(aviso => (
                <AdviceNotification
                  onPress={() => navigation.navigate("AdviceProfile", {})}
                  key={aviso.id}
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
