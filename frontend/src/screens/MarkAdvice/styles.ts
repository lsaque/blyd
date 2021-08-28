import styled from 'styled-components/native';
import FilledButton from '../../components/FilledButton';

export const Container = styled.ScrollView`
  padding: 0 20px;
  background-color: #FFF;
  height: 100%;
`;

export const Content = styled.KeyboardAvoidingView`
  padding-top: 30px;
`;

export const RadioArea = styled.View`
  background: #F1EEEE;
  margin: 10px 0;
  height: 60px;
  width: 48%;
  border-radius: 15px;
  justify-content: center;
  border-color:#8749FC;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  color: #707070;
  margin: 30px 0 5px 0;
`;

export const RadioComponent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MarkAdviceButton = styled(FilledButton)`
  padding-top: 50px;
`;

