import { andar } from "./andar";
import { ponto } from "./ponto";

export type comodoCategorizado = {
  id: number;
  tipo: string;
  comodos: comodo[];
};

export type comodo = {
  id: number;
  nome: string;
  tipo: string;
  pontoInicial: ponto;
  pontoFinal: ponto;
  andar: andar;
};
