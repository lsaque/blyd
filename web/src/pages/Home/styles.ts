import styled from "styled-components";
// import Background from "../../assets/background.png";
import Background from "../../assets/planta.png";
// import planImage from "../../assets/background.png";


export const Text = styled.h1`
  font-size: min(calc(6vw - 10%), 80px);
`;

export const Container = styled.div`
  background: #E8E2FD;
  padding: 10px 0;
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
  @media (max-width: 640px){
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  max-width: 640px;
  padding: 20px 20px 0 20px;
  /* max-height: 1080px; */
  margin: 0 auto;
  @media (max-width: 640px){
    border-radius: 0;
  }
`;

export const Header = styled.header`
  /* background-color: red; */
  /* flex-direction: row; */
  /* height: 58px; */
  /* border: 1px solid red; */
  width: 100%;
  height: 56px;
  
  display: flex;
  align-items: center;
  /* justify-content: left; */
`;

export const PlanImage = styled.a`
  margin-top: 20px;
  width: 100%;
  min-height: 185px;
  height: 100%;
  
  cursor: pointer;

  border-radius: 15px;
  background-image: url(${ Background });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;


export const FullScreenButton = styled.button`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;


  margin: 0 10px 10px 10px;

  height: 45px;
  width: 45px;
  border-radius: 10px;
  background-color: #00000085;

  :hover{
    background-color: #000000;
  }

  > h4 {
    color: black;
  }
`;

