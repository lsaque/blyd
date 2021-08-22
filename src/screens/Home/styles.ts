import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: white;
  /* position: relative; */
  /* padding-top: 50px; */
  display: flex;
  height: 100% ;
  /* padding: 20px; */
`;

export const HomeImage = styled.ImageBackground`
  height: 51.2%;
  /* width: 100%; */
  padding: 0 20px;
  /* border-width: 1px; */
  /* justify-content: space-between; */
`;

export const Top  = styled.View`
  align-items: flex-end;
  /* margin-top: 50px; */
`;

export const ButtonInformation = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`;

export const Bot = styled.View`
  margin-top: 50px;
`;

export const WelcomeText = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: #FFF;
  /* border: 1px solid red; */
  margin-top: 50px;
`;

export const Content = styled.View`
  height: auto;
  padding: 0 20px;
  /* border: 1px solid red; */
  padding-bottom: 50px;
`;

export const PageTitle = styled.Text`
  /* font-weight: bold; */
  padding-top: 15px;
  font-size: 16px;
`;