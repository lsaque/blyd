import { usuario } from "./usuario";

export type setor = {
  id: number;
  nome: string;
  descricao: string;
  usuarios: usuario[];
};
