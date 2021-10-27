import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

import GlobalStyles from '../../assets/styles/GlobalStyles';
import FullScreenMap from '../../assets/image-map.png';
import Forms from "../../components/Forms";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as FullScreenIcon } from '../../assets/fullscreen-icon.svg';

import { 
  Container,
  Header,
  PlanImage,
  FullScreenButton,
  Wrapper,
} from "./styles";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);  

  return (
    <React.Fragment>

      <GlobalStyles/>

      <Container>
        <Wrapper>
          
          <Header>
            <Logo height={45} width={100}/>
          </Header>

          <PlanImage onClick={openModal}>
            <FullScreenButton>
              <FullScreenIcon height={23}/>
            </FullScreenButton>
          </PlanImage>

          {isOpen && (
            <Lightbox
              mainSrc={FullScreenMap}
              enableZoom={true}
              imageTitle={"Visualização da planta (Apenas representativo)"}
              imagePadding={20}
              onCloseRequest={() => setIsOpen(false)}
            />
          )}

          <Forms/>

        </Wrapper>
      </Container>
    </React.Fragment>
  )
}

export default Home;
