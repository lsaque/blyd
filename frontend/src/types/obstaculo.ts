import { ponto } from "./ponto";

export type obstaculo = {
  nome: string;
  descricao: string;
  pontoInicial: ponto;
  pontoFinal: ponto;
};
