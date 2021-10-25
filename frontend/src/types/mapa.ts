import { andar } from "./andar";

export type mapa = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  matriz: string;
  andar: andar;
};
