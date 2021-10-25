/* eslint-disable no-empty-pattern */
import React from "react";

import GlobalStyles from '../../assets/styles/GlobalStyles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as FullScreenIcon } from '../../assets/fullscreen-icon.svg';

import { 
  Container,
  Header,
  PlanImage,
  FullScreenButton,
  Wrapper,
  // Text
} from "./styles";
import Forms from "../../components/Forms";

interface IHomeProps{

}

const Home: React.FC<IHomeProps> = ({}) => {
  return (
    <Container>
      <Wrapper>

        <Header>
          <Logo height={45} width={100}/>
        </Header>

        <PlanImage onClick={() => {alert("salve")}}>
          <FullScreenButton>
            <FullScreenIcon height={23}/>
          </FullScreenButton>
        </PlanImage>

        <Forms/>
        
      </Wrapper>

      <GlobalStyles/>
    </Container>
  )
}
export default Home;
