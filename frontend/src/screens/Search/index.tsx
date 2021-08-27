import React from 'react';
import { Dimensions } from 'react-native';
import { BackgroundImage } from '../../../styles';

import background from '../../assets/Search/background.png';

import SearchNavigation from '../../components/SearchNavigation';
import SearchTopics from '../../components/SearchTopics';

import { 
  Container,
  Wrapper
  // Left,
  // InputArea,
  // ButtonSearch,
  // Input,
} from './styles';

export default function Search({navigation} : any){
  return(
    <Container>
      <BackgroundImage source={background} resizeMode="cover" style={{
        padding: 20,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        // height: 100,
      }}>
        <SearchNavigation
          onPress={() => navigation.goBack('history')}
        />

        <SearchTopics
          title="Locais Recentes"
        />

      </BackgroundImage>
    </Container>
  )
}
