import React from 'react';
import styled from 'styled-components/native';

interface Props{
  filled ?: boolean;
}

// interface SomeInterface {
//   awesome: boolean
// }

// const WrappedText = styled<SomeInterface>(Text)`
//   color: ${({awesome}) => awesome ? "green" : "black"}
// `

const Button = styled.TouchableOpacity<Props>`
  /* border: 1px solid green; */
  /* background-color:${(props) => (props.filled ? 'transparent' : '#8749FC')}; */
  background-color:${(props: Props) => props.filled ? '#8749FC' : '#ff0000'};
  /* background-color: #8749FC; */
  /* color: #FFF; */
  
  width: 100%;
  height: 65px;
  border-radius: 15px;
  margin-bottom: 18px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text<Props>`
  color: ${(props:Props) => (props.filled ? '#8749FC' : '#FFF')};
  font-size: 16px;
`;


export default ({text} : any) => {
  return (
    <Button>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}