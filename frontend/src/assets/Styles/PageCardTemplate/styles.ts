import styled from 'styled-components/native';
import SearchNavigation from '../../../components/SearchNavigation';

export const Container = styled.View`
  background-color: #fff;
  height: 100%;
`;

export const ImagePage = styled.View`
  justify-content: center;
  align-items: center;
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

export const Content = styled.View`
  border-radius: 30px;
  min-height: 628px;
  background-color: #fff;
`

export const Wrapper = styled.View`
  margin: 15px 20px;
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