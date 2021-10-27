import { usuario } from "./usuario";

export type login = {
  status: boolean;
  mensagem: string;
  usuario: usuario;
}