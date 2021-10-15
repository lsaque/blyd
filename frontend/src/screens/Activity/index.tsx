import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Image, View, Text} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BackgroundImage } from '../../../styles';

import {setAdviceHour, setDueDate } from '../../utils/commons/generateDate';

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
import { aviso } from '../../types/aviso';
import AdminLastAdvice from '../../components/AdminLastAdvice';
import { setNewAdviceList } from '../../utils/commons/generateNewAdviceList';

export default function Activity({navigation}:any){

  const modalizeRef = useRef<Modalize>(null);

  const uriBackground = Image.resolveAssetSource(Background).uri;
  const [ adviceList, setAdviceList ] = useState<aviso[]>();
  const [ index, setIndex ] = useState<number>(-1);

  useEffect(() => {
    axios.get(`${BASE_URL}/avisos`).then((response) => {
      const data = response.data as aviso[];
      const newData = setNewAdviceList(data) as aviso[];
      setAdviceList(newData);
    });
   setTimeout(() => setIndex(index + 1),3000);

  },[index]);

  // function handleTimeDuration(activityCard: activityCardAdvice){
  //   console.log(activityCard.timeDuration);
  //   return "1h";
  // }
  
  return(
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
        <Content style={{marginHorizontal: 20}}
            accessibilityHint={"Neste quadrado branco é possível visualizar todas as categorias de locais disponíveis no aplicativo. São ordenados apenas 2 por linha"}
          >
            <Title
              style={{marginBottom: 30}}
              accessibilityHint="Título dizendo para informar o local, juntamente de um ícone do planeta"
            >Visualizar <Strong>Notificações</Strong> 🔮</Title>
              {
                adviceList?.map(advice => {

                  const dueDate = setDueDate(advice.tempoFinal);

                  return(
                    <AdminLastAdvice
                      key={advice.id}
                      userPicture={Background}
                      userName={advice.usuario.nome}
                      adviceHour={setAdviceHour(advice.tempoInicio)}
                      adviceName={`${advice.descricao} - ${advice.local}`}
                      adviceTimeRemaining={advice.duracao}
                      isImpassable={advice.transitavel}
                      dueDay={dueDate[0]}
                      dueMonth={dueDate[1]}
                      dueYear={dueDate[2]}
                      dueHour={dueDate[3]}
                      dueMinute={dueDate[4]}
                      onPress={() => navigation.navigate("AdviceProfile", {advice : advice})}
                  /> 
                  );
                })
              }
{/* 
          <Wrapper 
            style={{marginTop: 40}}
            accessibilityHint={"Neste quadrado branco é possível visualizar todas as categorias de locais disponíveis no aplicativo. São ordenados apenas 2 por linha"}
          > */}
            {/* {
              activityCardAdviceData?.map((data) => (
                <ActivityCardAdvice
                  key={data.id}
                  name={data.usuario.nome}
                  adviceName={data.descricao}
                  adviceLocal={data.local}
                  timeDuration={data.duracao}
                />
              ))
            } */}
            
          {/* </Wrapper> */}
        </Content>
      </Container>
    </ParallaxHeader>
  )
}
