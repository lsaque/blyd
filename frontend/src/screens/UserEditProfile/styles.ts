import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  background-color: #fff;
`;

export const EditButton = styled.View`
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #919191;
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  background-color: #F5F5F5;
  border: 1px solid #ECECEC;
  height: 48px;
  border-radius: 10px;
  color: #565656;
  padding-left: 20px;
  margin-bottom: 25px;
`;

export const PickerArea = styled.View`
  background-color: #F5F5F5;
  border: 1px solid #ECECEC;
  height: 48px;
  border-radius: 10px;
  /* color: #565656; */
  padding-left: 20px;
  margin-bottom: 25px;
`;

export const RadioArea = styled.View`
  margin-bottom: 15px;
`;

export const ButtonPassword = styled.TouchableOpacity`
  background-color: #F5F5F5;
  border: 1px solid #ECECEC;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  height: 48px;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 25px;
`;

export const Placeholder = styled.Text`
  color: #565656;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #8363F6;
  border: 1px solid #ECECEC;
  height: 48px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;