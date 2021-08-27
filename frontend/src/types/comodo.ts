import { andar } from "./andar";
import { ponto } from "./ponto";

export type comodoCategorizado = {
  tipo: string;
  comodos: comodo[];
};

export type comodo = {
  nome: string;
  tipo: string;
  pontoInicial: ponto;
  pontoFinal: ponto;
  andar: andar;
};
