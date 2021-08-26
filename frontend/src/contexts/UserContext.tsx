import React, { createContext, useReducer } from 'react';

// import { Container } from './styles';

export const UserContext = createContext;

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
}

// const contexts = ({children, ...props}) => {
  // return(
    // <UserContext.Provider>

      
    // </UserContext.Provider>
  // )
// }