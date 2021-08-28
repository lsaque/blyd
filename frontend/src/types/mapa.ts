import { andar } from "./andar";

export type mapa = {
  nome: string;
  descricao: string;
  linkImagem: string;
  m2: number;
  andar: andar;
};
