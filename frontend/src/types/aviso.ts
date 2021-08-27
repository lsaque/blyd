import { andar } from "./andar";
import { ponto } from "./ponto";
import { usuario } from "./usuario";

export type aviso = {
  nome: string;
  descricao: string;
  transitavel: boolean;
  dia: number;
  mes: number;
  ano: number;
  hora: number;
  minuto: number;
  usuario: usuario;
  ponto: ponto;
  andar: andar;
};
