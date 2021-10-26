import React, { createContext, useState } from 'react';
import { apiData } from '../types/apiData';

type PropsApiContext = {
  state: apiData ;
  setState: React.Dispatch<React.SetStateAction<apiData>>;
}

const DEFAULT_VALUE = {
  state: {
    andares: [],
    avisos: [],
    comodos: [],
    comodosCategorizados: [],
    mapas: [],
    setores: [],
    solicitacoes: [],
    usuarios: [],
    usuarioLogin: null,
  },
  setState: () => {},
}

const ApiContext = createContext<PropsApiContext>(DEFAULT_VALUE);

const ApiProvider: React.FC = ({ children }) => {
  const [state, setState ] = useState<apiData>(DEFAULT_VALUE.state);

  return(
    <ApiContext.Provider value={{state, setState}}>
      {children}
    </ApiContext.Provider>
  );
}
export { ApiProvider };
export default ApiContext;
