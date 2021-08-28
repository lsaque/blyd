import { andar } from "./andar";
import { ponto } from "./ponto";

export type beacon = {
  nome: string;
  descricao: string;
  ponto: ponto;
  andar: andar;
};
