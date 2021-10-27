import { andar } from "./andar";

export type comodoCategorizado = {
  id: number;
  tipo: string;
  comodos: comodo[];
};

export type comodo = {
  id: number;
  nome: string;
  tipo: string;
  pontoEntrada: string;
  andar: andar;
};
