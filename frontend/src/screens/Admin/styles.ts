import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #FFF;
`;

export const AdminHeader = styled.View`
  margin: 0 20px;
  height: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`;

export const WelcomeContainer = styled.View`
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 32px;
`;

export const Description = styled.Text`
  color: #FFF;
  font-size: 18px;
`;

export const Image = styled.Image`
  border-radius: 10px;
  border-width: 1px;
  border-color:#FFF;
  max-height: 75px;
  max-width: 75px;
`;

export const Content = styled.View`
  height: auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -25px;
  z-index: 1;
  background-color: #FFFF;
`;

export const DivisorCategory = styled.View`
  padding: 24px 0;
  border-color: #F2F2F2;
  border-bottom-width: 10px;
`;

export const GridPhotos = styled.View`
  margin-left: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Credits = styled.View`
  width: 100%;
  margin: 10px 0;
  height: 50px;
`;

export const ImageCredits = styled.Image`
  width: 20%;
  /* height: 200px; */
`;