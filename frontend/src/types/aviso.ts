import { andar } from "./andar";
import { ponto } from "./ponto";
import { usuario } from "./usuario";

export type aviso = {
  id: number;
  descricao: string;
  local: string;
  tempoInicio: string;
  tempoFinal: string;
  duracao: string;
  listaPonto: string;
  transitavel: boolean;
  usuario: usuario;
};
