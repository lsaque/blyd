import { andar } from "./andar";
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
  status: boolean;
  usuario: usuario;
};
