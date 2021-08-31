import styled from 'styled-components/native';
import SearchNavigation from '../../../components/SearchNavigation';

export const Container = styled.KeyboardAvoidingView`
  padding: 0 20px;
`;

export const ImagePage = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

// Modalize

export const Title = styled.Text`
  text-align: center;
  color: #707070;
  font-size: 20px;
  margin-top: 25px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const Content = styled.ScrollView`
  margin: 30px 20px 0 20px;
`

export const Wrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Row = styled.View`
  margin-bottom:20px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContactNavigation = styled(SearchNavigation)``;