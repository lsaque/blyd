import styled from 'styled-components/native';
import FilledButton from './src/components/FilledButton';
import OutlinedButton from './src/components/OutlinedButton';

export const BackgroundImage = styled.ImageBackground`
  height: 100%;
`;

export const Wrapper = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const LogoBlyd = styled.Image`
  margin-bottom: 15px;
  width: 100px;
`;

export const BoxImage = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const Image = styled.Image``;

export const BoxContent = styled.View`
  margin: 40px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  padding-bottom: 15px;
  color: #000;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #939BA6;
`;

export const SplashButton = styled.Text`
  background-color: white;
  color: #8749FC;
  padding: 10px 16px;
  text-align: center;
  border-color: #8749FC;
  border-width: 1px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modalize

export const SignWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 90%;
`;

export const ButtonArea = styled.View`
  width: 100%;
`;

export const EnterButton = styled(FilledButton)``;

export const RegisterButton = styled(OutlinedButton)``;